const express =require('express');
const router = express();
const users=require('../models/user');


router.post('/signup',(req,res,next)=>{
    console.log(req.body);
       let newUser =new users({
         username:req.body.username,
        email:req.body.email,
       password:req.body.password
    });
    console.log("comming");
    users.addUser(newUser,(err,data)=>{
        if(err){
            res.json({success:false,msg:'fail to register'+err});
        }
        else{
            res.json({success:true,msg:'user registered'+data});
        }
    });
});
module.exports=router;