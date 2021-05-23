const express = require('express');
const handlebars = require('express-handlebars');


module.exports = function(app) {

    app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));
}