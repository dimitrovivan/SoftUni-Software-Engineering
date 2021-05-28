const router = require('express').Router();
const {register, login} = require('../services/authServices');
const {checkIfAllInputsAreFilled} = require('../middlewares/validate');
const { COOKIE_NAME } = require('../config/auth');

router.get('/register', (req, res) => {
    res.render('register');
})

router.post('/register', checkIfAllInputsAreFilled, (req, res) => {
    let {username, password, repeatPassword} = req.body;
    if(password !== repeatPassword) return res.render('register');

    register(username, password)
            .then(() => res.redirect('/auth/login'))
            .catch((err) => res.send(err.message));
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', checkIfAllInputsAreFilled, (req, res) => {
   let {username, password} = req.body;
   login(username, password)
        .then(token => {
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
            return;
          })
        .catch((err) => res.send(err.message));

})

router.get('/logout', (req, res) => {
   res.clearCookie(COOKIE_NAME);
   res.redirect('/');
   return;
})

module.exports = router;