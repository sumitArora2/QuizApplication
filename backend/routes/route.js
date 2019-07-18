const express =require('express');
const router = express();
const config=require('../config/database');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const User= require('../models/user');
const Quiz=require('../models/class');
const bcrypt=require('bcryptjs');
var quiz=require('../controllers/quiz');
const Complaint =require('../controllers/complaint');

//signup

router.post('/signup',(req,res,next)=>{
       let newUser =new User({ 
         username:req.body.username, 
        email:req.body.email,
       password:req.body.password, 
       role:req.body.role,
       class:req.body.class
    });
    User.addUser(newUser,(err,data)=>{
        if(err){ newUser.save(callback);
            res.json({success:false,msg:'fail to register'+err});
        }
        else{
            res.json({success:true,msg:'user registered'+data});
        }
    });
});
 
// fr complaints

// router.post('/complaint',(req,res,next)=>{
//     let newComplaint = new Complaint({
//         firstname:req.body.firstname,
//         lastname:req.body.lastname,
//         email:req.body.email,
//         message:req.body.message
//     });
//     Complaint.addComplaint(newComplaint,(err,data)=>{
   
//         if(err){
//             res.json({success:false,msg:'fail to register complaint'+err});
//         }else{
//             res.json({success:true,msg:'complaint register'+data});
//         }
//     });
// });
// fr add complaint
router.route('/complaint').post(Complaint.addComplaint);
// fr get complaint
router.route('/getComplaint').get(Complaint.getComplaint);


router.route('/addclass').post(quiz.addClass);
router.route('/getclass').get(quiz.getClass);
router.route('/getSpecificClass/:classId').get(quiz.getSpecificClass);
router.route('/deleteClass/:classId').delete(quiz.deleteClass);
router.route('/updateClass/:classId').put(quiz.updateClass);
router.route('/addsubject/:classId').patch(quiz.addSubject);
router.route('/getsubject').get(quiz.getSubject);
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
    console.log("login password is: ",password);
    console.log("passssssss: ",User.password);
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
            console.log("user pass  ",user.password);
            console.log(password);
            console.log("dhgfghjfjgkj  ",isMatch);
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
    res.json({User: req.User});
});

router.get('/userprofile/:id',(req,res,next)=>{
    User.find({_id:req.params.id},
    function(err, data){
        if(err){
            res.json({success:false,msg:'fail to show'+err});
        }
        else{
            res.json({success:true,msg:'user prifile data: ',data});
        }
    });
})

router.put('/profileupdate/:id', (req,res,next)=>{
    // const email=req.body.email;
    // console.log("email is ",email);
    console.log("id is ",req.params.id);

    if(req.body.password != undefined){
        console.log("When body.password not null");
        
        // hash password
        console.log("password is ccccccccccccccccccc:  ",req.body.password);
        var passcheck=req.body.password;
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(passcheck,salt,(err, hash)=>{
                if(err) throw err;
                passcheck=hash; 
        console.log("aaaaaaaaaaaaaaaaa  ",passcheck);
        // hasd passworde end

        User.findOneAndUpdate({_id:req.params.id},
            {
                // if(req.body.password==null){        
                // },
                $set:{
                    // username:req.body.username,
                    // lastname:req.body.lastname, 
                    // email: req.body.email,
                    // phone:req.body.phone, 
                    // location:req.body.location,
                    // address:req.body.address,
                    password:passcheck,
                    // faterMotherName:req.body.faterMotherName,
                    // fmphone:req.body.fmphone
                }
            },
            function(err,data){
            if(err){
                res.json({success:false,msg:'fail to register'+err});
            }
            else{
                // User.addUser(data,(err,updatedata)=>{
                //     data.save();
                    // if(err){
                    //     console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                    //     res.json("password eroor occur..............");
                    // }
                    // else{
                    //     console.log("################################");
                    //     res.json({success:true,msg:'passowrd hash data: '+updatedata});
                    // }
                // });
                res.json({success:true,msg:'user data updated: '+data});
            }
        });
    });
    });
    }
    else{
        console.log("When body.password is null");
        User.findOneAndUpdate({_id:req.params.id},
            {
                $set:{
                    username:req.body.username,
                    lastname:req.body.lastname, 
                    email: req.body.email,
                    phone:req.body.phone, 
                    location:req.body.location,
                    address:req.body.address,
                    faterMotherName:req.body.faterMotherName,
                    fmphone:req.body.fmphone
                }
            },
            function(err,data){
            if(err){
                res.json({success:false,msg:'fail to register'+err});
            }
            else{
                res.json({success:true,msg:'user data updated: '+data});
            }
        });
    }
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
});


module.exports=router;