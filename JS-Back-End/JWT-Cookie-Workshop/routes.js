const { Router } = require('express');

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController.js');
const accessoryController = require('./controllers/accessoryController');
const authController = require('./controllers/authController');

const router = Router();

router.use('/', productController);
router.use('/about', aboutController);
router.use('/auth', authController);
router.use('/accessories', accessoryController);
router.get('*', ( req, res ) => {
    res.render('404');
})

module.exports = router;