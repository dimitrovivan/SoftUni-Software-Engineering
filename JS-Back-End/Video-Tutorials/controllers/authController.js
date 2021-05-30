const router = require('express').Router();
const { isAllInputsFilled } = require('../middlewares/validate');
const { register } = require('../services/authServices');

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', isAllInputsFilled, (req, res) => {
    
    let {password, repeatPassword} = req.body;
    if(password !== repeatPassword) return res.render('register', {message: "Password missmatch"});

    register(req.body)
           .then(() => res.redirect('/auth/login'))
           .catch((err) => res.render('register', {message: err.message}))
})

module.exports = router;