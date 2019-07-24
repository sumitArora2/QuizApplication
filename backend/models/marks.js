const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const MarksSchema = mongoose.Schema({
    User:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }, 
    Subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    marks: {
        type: String,
        required: true
    }  
});

const Marks = module.exports = mongoose.model('Marks', MarksSchema);