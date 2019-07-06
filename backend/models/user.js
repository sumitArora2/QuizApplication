const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt=require('bcryptjs');
const UserSchema =mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:6,
        maxlength:25,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    }
});
const User =module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById= function(id,callback){
    User.findById(id,callback); 
}

module.exports.getUserByUsername=function(username,callback){
    const query={username: username};
    User.findOne(query, callback);
}

<<<<<<< HEAD
=======

>>>>>>> 7bee5b85690fb6acae0d90f3abdc48a1b7ec6531
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