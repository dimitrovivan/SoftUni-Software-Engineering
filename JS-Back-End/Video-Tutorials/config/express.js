const { urlencoded } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const {checkForUserStateBeforeRequest} = require('../middlewares/auth');

module.exports = function (app) {

    app.use(urlencoded({
        extended: true
    }));
    app.use(express.static('public'));

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    
    app.use(cookieParser());

    app.use(checkForUserStateBeforeRequest)
}