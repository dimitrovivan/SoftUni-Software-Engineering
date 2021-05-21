const { Router } = require('express');

const validateCubeInputs = require('../services/helpers/validations');
const productServices = require('../services/productServices');

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

router.post('/create', validateCubeInputs , ( req, res ) => {    

    let cube = productServices.createCube(req.body);

    res.redirect('/');
});


module.exports = router;