const express =require('express');
const router = express();
const config=require('../config/database');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const User= require('../models/user');
const Quiz=require('../models/quiz');
const bcrypt=require('bcryptjs');
var quiz=require('../controllers/quiz');

router.post('/signup',(req,res,next)=>{
       let newUser =new User({
         username:req.body.username,
        email:req.body.email,
       password:req.body.password
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


router.route('/question').post(quiz.addQuestion);



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
                    expiresIn: 604800 //1 week 
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

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res,next)=>{
    res.json({user: req.user});
});

// router.get('/profile',(req, res,next)=>{
//     console.log("aaaprofile partaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//     res.send('Profle');
// })

//signup Validations
// router.post('/',(req,res)=>{
//     console.log(req.body);
//     const schema=Joi.object().keys({
//         email: Joi.string().trim().email().required(),
//         password: Joi.string.min(5).required()   
//      });

// Joi.validate(req.body,schema,(err,result)=>{
//     if(err){
//         res.send('an error has come');
//     }
//     console.log(result);
//     res.send('successfully registed');
// });
// })

module.exports=router;