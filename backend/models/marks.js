const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const MarksSchema = mongoose.Schema({
    User:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }], 
    Chapters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    marks: {
        type: String,
        required: true
    }  
});

const Marks = module.exports = mongoose.model('Marks', MarksSchema);