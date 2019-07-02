const mongoose = require('mongoose');
const config = require('../config/database');
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
};
module.exports.addUser = function(newUser, callback){
    User.create(newUser,callback);
};
module.exports.getUser = function(callback,limit){
    User.find(callback).limit(limit);
};