const { Router } = require('express');
const router = new Router();

const accessoryService = require('../services/accessoryServices');
const Accessory = require('../models/Accessory');

router.get('/create', (req, res) => {
    res.render('createAccessory');
})

router.post('/create', (req, res) => {
    let accessory = Accessory(req.body);
    accessory.save()
              .then(() => res.redirect('/'))
              .catch(() => res.send("HTTP 500 Service Unavaiable"));
})

module.exports = router;