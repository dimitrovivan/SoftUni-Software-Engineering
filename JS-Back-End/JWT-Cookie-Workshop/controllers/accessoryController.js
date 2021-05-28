const { Router } = require('express');
const router = new Router();

const accessoryService = require('../services/accessoryServices');
const cubeService = require('../services/cubeServices');
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

router.get('/attach/:cubeId', (req, res) => {

   Promise.all([cubeService.getCubeById(req.params.cubeId), accessoryService.getAll()])
                .then(([cubeData, accessories]) => res.render('attachAccessory', {cubeData, accessories}))
                .catch((err) => res.send("HTTP 500 Service uancss" + err.message));
})

router.post('/attach/:cubeId', (req, res) => {
        
    cubeService.attachAccessory(req.params.cubeId, req.body.accessory)
                                                                     .then(() => res.redirect('/'))
                                                                     .catch(() => res.send("asdas"));
 })

module.exports = router;