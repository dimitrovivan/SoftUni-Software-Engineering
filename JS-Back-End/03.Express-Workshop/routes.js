const { Router } = require('express');

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController.js');

const router = Router();

router.use('/', productController);
router.use('/about', aboutController);
router.get('*', ( req, res ) => {
    res.render('404');
})

module.exports = router;