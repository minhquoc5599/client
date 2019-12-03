// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var User = require('../models/user');


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//         // let username = req.body.username;
//         // let password = req.body.password;
//       User.findOne({ username: username }, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));

exports.login = (req,res,next) => {
    res.render('login', { title: 'Best Store',message: req.flash('message')  });
}

// exports.postLogin = (req,res,next) => {
   
//     //   app.post('/login', 
//     //   passport.authenticate('local', { failureRedirect: '/login' }),
//     //   function(req, res) {
//     //     res.redirect('/');
//     //   });
// }