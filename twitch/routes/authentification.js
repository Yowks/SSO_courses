var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', passport.authenticate('twitchtv'));

router.get('/callback', passport.authenticate('twitchtv', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports = router;