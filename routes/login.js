var express = require('express');
var router = express.Router();
var passport = require('../auths.js');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('loginForm', { errors: req.flash()});
// });


// router.post('/', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true,
// }));

router.route('/')
  .get((req, res, next) => {
    res.render('loginForm', { errors: req.flash()});
  })
  .post(passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }));


module.exports = router;
