const {COOKIE_NAME} = require('../config/auth');

module.exports = function() {
    return (req, res, next) => {
        if(req.cookies[COOKIE_NAME]) res.locals.isAuth = true;
        else res.locals.isAuth = false;
        next();
    }
}