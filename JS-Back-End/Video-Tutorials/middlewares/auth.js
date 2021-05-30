const {USER_COOKIE, SECRET} = require('../config/auth');
const jwt = require('jsonwebtoken');

function isAuth(check = 'authentication') {
    return (req, res, next) => {

    let cookie = Object.entries(req.cookies).find(([cookieName, cookieValue]) => cookieName == USER_COOKIE);
    if(!cookie) return check == 'authorization' ? res.redirect('login') : next();

    jwt.verify(cookie[1], SECRET, (err, decoded) => {
        if(err) return res.render('guest-home', {message: 'Do not try this again, you may be banned! Reason: false cookie info'});
        
        return check == 'authentication' ? res.redirect('/') : next();
    });
  }
}

module.exports = {
    isAuth
}