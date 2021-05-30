const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../config/auth');

async function register(data) {
    let isAvaiableUsername = await User.findOne({username: data.username});
    if(isAvaiableUsername) throw {message: "Username is already taken"};

    let user = User(data);
    return user.save();
}

async function login(data) {
    let user = await User.findOne({username: data.username});
    if(!user) throw {message: "User doesn't exists"};
    if(data.password !== user.password) throw {message: "Invalid password"};

    return jwt.sign({_id:user._id}, authConfig.SECRET);
}

module.exports = {
    register,
    login
}