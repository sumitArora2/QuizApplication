
// const User=require('../models/user');
// module.exports={
//     addUser: async(req, res)=>{
//         let newUser =new User({ 
//             username:req.body.username,
//            email:req.body.email,
//           password:req.body.password,
//           role:req.body.role});
//           User.addUser(newUser,(err,data)=>{
//             try{
//                 res.json({success:true,msg:'user registered'+data});
//             }
//             catch(err){
//                 res.json({success:false,msg:'fail to register'+err});
//             }
//         });
//     }
// }
// getProfile: async (req, res) => {
//     try {
//       const result = await Quiz.find();
//       result ?
//         res.status(200).send({
//           message: "Profile getting success",
//           result: result
//         }) :
//         res.status(422).send({
//           message: "profile are not getting",
//           result: result
//         })
//     } catch (error) {
//       throw error;
//     }
//   }
 