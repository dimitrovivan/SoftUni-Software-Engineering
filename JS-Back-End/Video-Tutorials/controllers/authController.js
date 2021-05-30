const router = require('express').Router();
const { isAllInputsFilled } = require('../middlewares/validate');
const { register, login } = require('../services/authServices');
const {USER_COOKIE} = require('../config/auth');

router.get('/login', (req, res) => res.render('login'));

router.post('/login', isAllInputsFilled, (req, res) => {

    login(req.body)
           .then((token) => {
               res.cookie(USER_COOKIE, token);
               res.redirect('/');
            })
           .catch((err) => res.render('login', {message: err.message}))
})

router.get('/register', (req, res) => res.render('register'));

router.post('/register', isAllInputsFilled, (req, res) => {
    
    let {password, repeatPassword} = req.body;
    if(password !== repeatPassword) return res.render('register', {message: "Password missmatch"});

    register(req.body)
           .then(() => res.redirect('/auth/login'))
           .catch((err) => res.render('register', {message: err.message}))
})

router.get('/logout', (req, res) => {
    if(!Object.keys(req.cookies).find(cookieName => cookieName == USER_COOKIE)) return res.redirect('/auth/login');
    res.clearCookie(USER_COOKIE);
    res.redirect('/');
});

module.exports = router;