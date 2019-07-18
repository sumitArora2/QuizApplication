const mongoose= require('mongoose');

//schema
const complaintSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'first name is required'],
        maxLength:25
    },
    lastname:{
        type:String,
        required:[true,'last name is required'],
        maxLength:25
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    message:{
        type:String,
        required:[true,'message is required'],
        maxLength:50
    }
});
const Complaint = module.exports = mongoose.model('Complaint',complaintSchema);
