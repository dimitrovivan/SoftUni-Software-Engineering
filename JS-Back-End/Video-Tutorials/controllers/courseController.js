const router = require('express').Router();
const { createCourse } = require('../services/courseServices');
const { isAllInputsFilled } = require('../middlewares/validate');

router.get('/create', (req, res) => {
    res.render('create-course');
})

router.post('/create', isAllInputsFilled, (req, res) => {
    createCourse({...req.body, creatorId: res.locals._id})
              .then(() => res.redirect('/'))
              .catch((err) => res.render('create-course', {message: err.message}))
})

module.exports = router;