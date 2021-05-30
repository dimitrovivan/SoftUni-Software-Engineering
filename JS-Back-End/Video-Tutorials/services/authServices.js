const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const {SECRET, HASH_SALT} = require('../config/auth');

async function register({username, password}) {
    let isAvaiableUsername = await User.findOne({username});
    if(isAvaiableUsername) throw {message: "Username is already taken"};

    let hashedPassword = await bcrypt.hash(password, HASH_SALT)
    let user = User({username, password: hashedPassword});
    return user.save();
}

async function login({username, password}) {
    let user = await User.findOne({username});
    if(!user) throw {message: "User doesn't exists"};

    let isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw {message: "Invalid password"};
    
    return jwt.sign({_id:user._id}, SECRET);
}

module.exports = {
    register,
    login
}