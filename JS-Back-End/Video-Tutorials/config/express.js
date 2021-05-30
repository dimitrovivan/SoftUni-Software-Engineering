const express = require('express');
const handlebars = require('express-handlebars');

module.exports = function (app) {
    
    app.use(express.json());
    app.use(express.static('public'));

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
}