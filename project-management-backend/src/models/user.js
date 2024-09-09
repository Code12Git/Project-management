const mongoose = require('mongoose')
const { Schema } = mongoose;

const authModel = new Schema({
    uid:{
        type:String,
        required:true,
        unqiue:true
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true  
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin', 'member', 'manager']
    }
},{timestamps:true})

module.exports = mongoose.model('Auth',authModel)