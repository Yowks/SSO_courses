var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('facebook', { scope : ['profile','email'] } ));

router.get('/callback',
    passport.authenticate('facebook', {
        successRedirect : '/',
        failureRedirect : '/login'
    })
);


module.exports = router;