const {COOKIE_NAME, SECRET} = require('../config/auth');
const jwt = require('jsonwebtoken');

function checkForAuthAndSaveInLocals() {
    return (req, res, next) => {
        if(req.cookies[COOKIE_NAME]) res.locals.isAuth = true;
        else res.locals.isAuth = false;
        next();
    }
}

function isAuthorized(req, res, next) {
        let token = req.cookies[COOKIE_NAME];

        if(token) {
            jwt.verify(token, SECRET, (err, decoded) => {
                if(err) return res.redirect('/auth/login');
                req.user = decoded;
                next();
            })
        }
        else {
            res.redirect('/auth/login');
            return;
        }
}

function isAuthenticated(req, res, next) {
        let token = req.cookies[COOKIE_NAME];

        if(token) {
            res.redirect('/');
            return;
        }
        else {
            next();
            return;
        }
}

module.exports = {
    checkForAuthAndSaveInLocals,
    isAuthorized,
    isAuthenticated
}