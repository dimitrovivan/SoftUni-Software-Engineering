const router = require('express').Router();
const {register} = require('../services/authServices');
const {checkIfAllInputsAreFilled} = require('../middlewares/validate');

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

module.exports = router;