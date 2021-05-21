const { Router } = require('express');

const validateCubeInputs = require('../services/helpers/validations');
const productServices = require('../services/productServices');

const router = Router();

router.get('/', ( req, res ) => {

    let cubes = productServices.getAllCubes();
    
    res.render('home', {cubes});
})

router.get('/details/:productId', ( req, res ) => {
    res.render('details');
});

router.get('/create', ( req, res ) => {
    res.render('create');
});

router.post('/create', validateCubeInputs , ( req, res ) => {    

    //TODO:: good validation for user inputs
    let cube = productServices.createCube(req.body);

    productServices.addCubeInDatabase(cube)
                                          .then( () => res.redirect('/') )
                                          .catch( err => {
                                              res.send(err);
                                          })

});


module.exports = router;