const { Router } = require('express');

const productController = require('./controllers/productController');

const router = Router();

router.use('/', productController);

module.exports = router;