const express = require('express');

const handlebars = require('express-handlebars');

function setUpExpress(app) {

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'));
}

module.exports = setUpExpress;