const express =require('express');
const router = express();
const config=require('../config/database');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const User= require('../models/user');
const Quiz=require('../models/quiz');
const bcrypt=require('bcryptjs');
var quiz=require('../controllers/quiz');
// const user=require('../controllers/user')
router.post('/signup',(req,res,next)=>{
       let newUser =new User({ 
         username:req.body.username,
        email:req.body.email,
       password:req.body.password,
       role:req.body.role
    });
    User.addUser(newUser,(err,data)=>{
        if(err){
            res.json({success:false,msg:'fail to register'+err});
        }
        else{
            res.json({success:true,msg:'user registered'+data});
        }
    });
});

// router.route('/signup').post(user.addUser);
router.route('/question').post(quiz.addQuestion);

router.route('/question').get(quiz.getQuestions);

// router.get('/questions',(req,res,next)=>{
//     Quiz.find(function(err,data){
//     if(err){
//        res.json(err);
//     }else{
//         res.json(data);
//     }
//     });
// });


//Autheticate login user
router.post('/authenticate', (req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    const role=req.body.role;

    User.getUserByEmail(email, (err, user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg:'User not found, try again'});
        }
        console.log("this is user ",user.role);
        User.comparePassword(password, user.password,(err,isMatch)=>{
            if(err){
               throw err; 
            }  
            if(isMatch){
                
                const token=jwt.sign(user.toJSON(),config.secret,{
                    expiresIn: 604800 //1 week 
                });
                res.json({
                    success:true,
                    token:'JWT '+ token,     
                    user:{
                        id:user._id,
                        username:user.username,
                        email:user.email,
                        role:user.role
                    }
                });
            }
            else{
                return res.json({success:false, msg:'Wrong Password'});
            }
        });

    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res,next)=>{
    res.json({user: req.user});
});

//complete Profile
// router.put('/profile',(req,res,next)=>{
//     let newUser =new User({ 
//     User.findByID()
//       username:req.body.username,
//       lastname:req.body.lastname,
//       email:req.body.email,
//       phone:req.body.phone, 
//       location:req.body.location,
//       address:req.body.address,
//       password:req.body.password,
//       role:req.body.role,
//       faterMotherName:req.body.faterMotherName,
//       fmphone:req.body.fmphone
//  });
//  User.addUser(newUser,(err,data)=>{
//      if(err){
//          res.json({success:false,msg:'fail to update'+err});
//      }
//      else{
//          res.json({success:true,msg:'Update your details successfully'+data});
//      }
//  });
// });

module.exports=router;