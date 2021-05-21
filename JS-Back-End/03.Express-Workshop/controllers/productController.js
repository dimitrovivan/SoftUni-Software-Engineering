const { Router } = require('express');

const router = Router();

router.get('/', ( req, res ) => {
    res.render('home');
})

router.get('/details/:productId', ( req, res ) => {
    res.render('details');
});

router.get('/create', ( req, res ) => {
    res.render('create');
});


module.exports = router;