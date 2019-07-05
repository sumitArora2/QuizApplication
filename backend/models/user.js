const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt=require('bcryptjs');
const UserSchema =mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const User =module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById= function(id,callback){
    User.findById(id,callback); 
}
// module.exports.addUser = function(newUser, callback){
//     User.create(newUser,callback);
// };
module.exports.getUserByUsername=function(username,callback){
    const query={username: username};
    User.findOne(query, callback);
}

// module.export.getUserByUsername= function(username,callback){
//     const query={username:username}
//     User.findOne(query,callback);
// };

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err, hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword=function(candidatePasword, hash,callback){
    bcrypt.compare(candidatePasword, hash, (err, isMatch)=>{
        if(err)throw err;
        callback(null, isMatch);
    });
}