const express = require('express');
const cookieParser = require('cookie-parser');
const {checkForAuthAndSaveInLocals} = require('../middlewares/auth');

const handlebars = require('express-handlebars');

function setUpExpress(app) {

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'));

    app.use(express.urlencoded({
        extended: true
    }))
    
    app.use(cookieParser());

    app.use(checkForAuthAndSaveInLocals());
}

module.exports = setUpExpress;