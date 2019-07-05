const express =require('express');
const router = express();
// const users=require('../models/user');
const config=require('../config/database');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const User= require('../models/user');
const bcrypt=require('bcryptjs');


router.post('/signup',(req,res,next)=>{
    console.log(req.body);
       let newUser =new User({
         username:req.body.username,
        email:req.body.email,
       password:req.body.password
    });
    console.log("comming");
    User.addUser(newUser,(err,data)=>{
        if(err){
            res.json({success:false,msg:'fail to register'+err});
        }
        else{
            res.json({success:true,msg:'user registered'+data});
        }
    });
});

//Autheticate login user
router.post('/authenticate', (req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUsername(username, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found'});
        }
        
        User.comparePassword(password, user.password,(err,isMatch)=>{
            if(err){
               throw err; 
            } 
            if(isMatch){
                
                const token=jwt.sign(user.toJSON(),config.secret,{
                    expiresIn: 604800 
                });
                res.json({
                    success:true,
                    token:'JWT '+ token,     
                    user:{
                        id:user._id,
                        username:user.username,
                        email:user.email
                    }
                });
            }else{
                return res.json({success:false, msg:'Wrong Password'});
            }
        });
    });
});
module.exports=router;