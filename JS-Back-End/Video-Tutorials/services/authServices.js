const User = require('../models/User');

async function register(data) {
    let isAvaiableUsername = await User.find({username: data.username});
    if(isAvaiableUsername) throw {message: "Username is already taken"};
    
    let user = User(data);
    return user.save();
}

module.exports = {
    register
}