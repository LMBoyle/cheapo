const express = require('express');
const router = express.Router();
const passport = require('../../passport');
const userController = require("../../controllers/userController");

// this route is just used to get the user basic info
router.get('/user', userController.getUser)
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/logout', userController.logout);
router.post('/signup', userController.register);

module.exports = router;
//======================NOT SURE IS THIS CODE GOES HERE. CAME FROM PASSPORT DOCUMENTATION=========//
// passport.use(new LocalStrategy(
    // function(username, password, done) {
    //   User.findOne({ username: username }, function (err, user) {
        // if (err) { return done(err); }
        // if (!user) { return done(null, false); }
        // if (!user.verifyPassword(password)) { return done(null, false); }
        // return done(null, user);
    //   });
    // }
//   ));
//==============AUTH REQUEST 
// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
    // res.redirect('/');
//   });