var express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./login_middle');

var router = express.Router();

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
    
});

router.get('/register', isNotLoggedIn, (req, res) => {
    res.render('register', {
        // user: req.user,
        // registerError: reqflash('registerError'),
    });
});

router.get('/', (req, res, next) => {
    res.render('main' , {
    //user: req.user,
    //loginError: req.flash('loginError'),
    });
});

module.exports = router;