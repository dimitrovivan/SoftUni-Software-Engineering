const { Router }= require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.render('about');
})

module.exports = routes;