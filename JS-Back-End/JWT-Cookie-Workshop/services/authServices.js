const User = require('../models/User');
const bcrypt = require('bcrypt');

async function isUsernameReserved(username) {
      let result = await User.findOne({username});

      if(result) return false;
      return true;
}
async function register(username, password) {
    if(isUsernameReserved(username)) throw {message: "Username taken"};

    let hashedPassword = await bcrypt.hash(password, 5);
    let user = new User({username, password: hashedPassword});
    return user.save();
       
}

module.exports = {
      register
}