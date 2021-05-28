const { Router } = require('express');

const validateCubeInputs = require('../services/helpers/validations');
const cubeService = require('../services/cubeServices');

const router = Router();

router.get('/', ( req, res ) => {

    cubeService.getAllCubes()
                             .then(cubes => res.render('home', {cubes}))
                             .catch( () => res.send("HTTP error 500: Service unavaiable"))
})

router.get('/details/:productId', ( req, res ) => {

    let productId = req.params.productId;
    
    cubeService.getCubeById(productId)
                                      .then(cubeData => res.render('details', {...cubeData}))
                                      .catch(() => res.send("HTTP 500. Service unavaiable"));
});

router.get('/create', ( req, res ) => {
    res.render('create');
});

router.post('/create', validateCubeInputs , ( req, res ) => {    

    let cube = cubeService.createCube(req.body);
    cube.save()
               .then(() => res.redirect('/'))
               .catch((err) => res.send(err.message));
});


module.exports = router;