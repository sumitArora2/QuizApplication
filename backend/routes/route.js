const express =require('express');
const router = express();
const config=require('../config/database');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const User= require('../models/user');
const Quiz=require('../models/class');
const bcrypt=require('bcryptjs');
var quiz=require('../controllers/quiz');
const Complaint =require('../models/complaint');

//signup

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

// fr complaints

router.post('/complaint',(req,res,next)=>{
    let newComplaint = new Complaint({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        message:req.body.message
    });
    Complaint.addComplaint(newComplaint,(err,data)=>{
   
        if(err){
            res.json({success:false,msg:'fail to register complaint'+err});
        }else{
            res.json({success:true,msg:'complaint register'+data});
        }
    });
});

router.route('/addclass').post(quiz.addClass);
router.route('/getclass').get(quiz.getClass);
router.route('/addsubject/:classId').patch(quiz.addSubject);
router.route('/addchapter/:classId/:subjectId').post(quiz.addChapter);
router.route('/addquestion/:classId/:subjectId/:chapterId').post(quiz.addQuestion);
router.route('/addoption/:questionId').post(quiz.addOption);
// router.route('/signup').post(user.addUser);
router.route('/question').post(quiz.addQuestion);

router.route('/question').get(quiz.getQuestions);
router.route('/question/:classid').patch(quiz.addMoreQuestion);
router.route('/question/:subjectId/:questionId').patch(quiz.DeleteQuestion);


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