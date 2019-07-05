const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User= require('../models/user');
const config= require('../config/database');

// module.exports=function(passport){
//     let opts={};
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//     opts.secretOrKey = config.secret;
//     passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
//         User.getUserById(jwt_payload._id, (err, user)=>{
//             if(err){
//                 console.log("passport error");
//                 return done(err, false);
//             }
//             if(user){
//                 console.log("user null error");
//                 return done(null, user);
//             }else{
//                 console.log("else part error");
//                 return done(null, false);
//             }
//         });
//     }));
// }
module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log("payload fffff");
        console.log(jwt_payload);
      User.getUserById(jwt_payload._id, (err, user) => {
        if(err){
          return done(err, false);
        }
  
        if(user){
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }));
  }