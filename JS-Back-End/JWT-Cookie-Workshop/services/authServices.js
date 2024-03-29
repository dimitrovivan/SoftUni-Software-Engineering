const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config/auth');

const getUserByName = (username) => User.findOne({username});

async function register(username, password) {
    let isExisting = await getUserByName(username);
    if (isExisting) throw {message: "Username taken"};

    let hashedPassword = await bcrypt.hash(password, 5);
    let user = new User({username, password: hashedPassword});
    return user.save();
       
}

async function login(username, password) {
      let user = await getUserByName(username);
      if(!user) throw {message: "User doesn't exists"};

      let isMatch = bcrypt.compare(password, user.password);
      if(!isMatch) throw {message: "Wrong password"};
        
      let token = jwt.sign({_id: user._id}, SECRET);
      return token;
}


module.exports = {
      register,
      login
}