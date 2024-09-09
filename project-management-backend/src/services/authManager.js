const { userModel } = require('../models')
const bcrypt = require('bcryptjs')
const { BAD_REQUEST, CONFLICT } = require('../utils/errors')
const { AppError } = require('../utils')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const { fromEnv } = require('../utils')
const {oauth2client} = require('../config/googleConfig')
const axios = require('axios')

const register = async (body) => {
    const { name, username, email, password,role } = body;
    try {
        if (_.isEmpty(name) || _.isEmpty(username) || _.isEmpty(email) || _.isEmpty(password)) {
            const error = { ...BAD_REQUEST, message: "All Fields must be required" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            const error = { ...CONFLICT, message: "User already exists" };
            throw new AppError(error.code, error.message, error.statusCode);
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds); 

        const newUser = new userModel({
            name,
            username,
            email,
            password: hashedPassword,
            role:'member'
        });

        await newUser.save(); 
        return newUser;

    } catch (err) {
        throw err;
    }
};




const login = async (body) => {
    const { email, password } = body;
    try {
        if (_.isEmpty(email) || _.isEmpty(password)) {
            const error = { ...BAD_REQUEST, message: "Please enter all required fields" };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            const error = { ...NOT_FOUND, message: "User does not exist" };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const error = { ...UNAUTHORIZED, message: "Invalid credentials" };
            throw new AppError(error.code, error.message, error.statusCode);
        }
        const token = jwt.sign({ username: user.username }, fromEnv('SECRET_KEY'), { expiresIn: '1d' });
        const refreshToken = jwt.sign({ username: user.username }, fromEnv('REFRESH_KEY'), { expiresIn: '7d' });
        user.refreshToken = refreshToken;
        return { user,token }
    } catch (err) {
        throw err;
    }
};

 

const googleLogin = async (query) => {
    const { code } = query;
    console.log(`Received code: ${code}`);
    
    try {
        console.log('Requesting Google token...');
        const googleRes = await oauth2client.getToken(code);
        console.log('Google token response:', googleRes);
        oauth2client.setCredentials(googleRes.tokens);
        console.log('Google tokens set for OAuth2 client');
        console.log('Requesting user information from Google...');
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
        console.log('Google user info response:', userRes.data);
        const { email, name, picture } = userRes.data;
        console.log(`Checking if user with email ${email} exists in database...`);
        let user = await userModel.findOne({ email });
        
        if (!user) {
            console.log('User not found, creating new user...');
            user = await userModel.create({
                name,
                email,
                image: picture
            });
            console.log('New user created:', user);
        }

        const { _id } = user;        
        console.log('Generating JWT token...');
        const token = jwt.sign({ _id, email }, fromEnv('SECRET_KEY'), { expiresIn: fromEnv('JWT_TIMEOUT') });
        console.log('JWT token generated:', token);

        return { user, token };
        
    } catch (err) {
        console.error('Error during Google login:', err);
        throw new Error('Error during Google login');
    }
};

module.exports = { register, login , googleLogin }