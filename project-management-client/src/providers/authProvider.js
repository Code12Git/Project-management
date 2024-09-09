import axios from 'axios';

const AUTHAPIS = axios.create({
    baseURL: 'http://localhost:8000/api/v1/auth'   
});

const googleAuth = async (authCode) => {
    console.log('Google Auth Working with code:', authCode);
    try {
        const response = await AUTHAPIS.get('/google', { code: authCode });
        console.log('Google login response:', response.data);
        return response;
    } catch (err) {
        console.error('Error during Google authentication:', err);
        throw err;
    }
};


export { googleAuth };
