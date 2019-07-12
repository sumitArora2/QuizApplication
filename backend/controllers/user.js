// const User=require('../models/user');

// module.exports={
//     addUser: async (req, res, next) => 
//     {
//         let userId = await helper.fetchUserId(req.headers.authorization);
//         let newUser = new User({
//             username:req.body.username,
//             email:req.body.email,
//             password:req.body.password,
//             role:req.body.role
//         });
//         User.addUser(newUser,(data,err)=>{
//             try{
//                 res.json({success:true,msg:'user registered'+data});
//             }
//         catch(err){
//                 res.json({success:false,msg:'fail to register'+err});
//             }
       
//         });
//     }
// }

 