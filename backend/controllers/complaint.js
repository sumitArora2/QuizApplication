const Complaint = require('../models/complaint');
module.exports ={
    addComplaint : async(req,res)=>{
        try{
            let newComplaint = new Complaint(req.body);
            const result = await newComplaint.save();
            result ? res.status(200).send({success:true,message:'your complaint is register',res:result
            }):
            res.status(422).send({success:false,
                message:'fail to register the complaint',res:result
            });
        }catch(err){
            console.log(err);
            res.send(err);
        }
    },
    getComplaint: async(req,res)=>{
        try{
            const result =await Complaint.find();
            console.log('result',result);
            result ? res.status(200).send({
                success:true,message:"complaint details",res:result
            }):
            res.status(422).send({
                success:false,message:'not getting any details'
            });
        }catch(err){
            console.log(err);
            res.send(err);
        }
    }
}
