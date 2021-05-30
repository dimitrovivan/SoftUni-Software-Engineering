const {USER_COOKIE, SECRET} = require('../config/auth');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserToken = (req) => Object.entries(req.cookies).find(([cookieName, cookieValue]) => cookieName == USER_COOKIE);

function checkForUserStateBeforeRequest(req, res, next) {
    const cookie = getUserToken(req);
    if(!cookie) return next();

    jwt.verify(cookie[1], SECRET, (err, decoded) => {
        if(err) return res.render('home', {message: 'Do not try this again, you may be banned! Reason: false cookie info'});

        User.findById(decoded._id).lean()
             .then(user => {
                 res.locals.username = user.username;
                 res.locals._id = user._id;
                 next();
             })
        
    });
}

function isAuth(check = 'authentication') {
    return (req, res, next) => {
    let cookie = getUserToken(req);
    if(!cookie) return check == 'authorization' ? res.redirect('login') : next();

    jwt.verify(cookie[1], SECRET, (err, decoded) => {
        if(err) return res.render('home', {message: 'Do not try this again, you may be banned! Reason: false cookie info'});
        
        return check == 'authentication' ? res.redirect('/') : next();
    });
  }
}

module.exports = {
    isAuth,
    checkForUserStateBeforeRequest
}