const { Router }= require('express');
const aboutController = require('./controllers/aboutController');
const productController = require('./controllers/productController');

const routes = Router();

routes.use('/', productController);
routes.use('/about', aboutController);
routes.get('*', (req, res) => {
    res.render('404');
});

module.exports = routes;