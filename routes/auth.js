var express = require('express');
var passport = require('passport');
var bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./login_middle');
const { User } = require('../models');

var router = express.Router();
router.post('/register', isNotloggedIn, async (req, res, next) => {
    const { nick, user_id, user_pw} = req.body;
    try{
        const exUser = await User.findOne({ where: { email } });
        if(exUser) {
            req.flash('registerError', '이미 가입된 이메일입니다.');
            return res.redirect('/register');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            nick,
            user_id,
            user_pw: hash,
        });
        return res.redirect('/');
    } catch (error) {
        console.error(error);
        return next(authError);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if(!user) {
            reqq.flas('loginError', info.message);
            return res.redirect('/');
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;