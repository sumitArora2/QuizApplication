const mongoose = require('mongoose');
const Subject=require('./subject');
const Class=require('./class');
const Chapter=require('./chapter');
const Question=require('./question');
var Schema = mongoose.Schema;
const OptionSchema=mongoose.Schema({
 
        option_name: {
            type: String,
            required: true
        },
        IsAnswer: {
            type: String,
            required: true
        },
    // Subjects:[{type:Schema.Types.ObjectId,ref:'Subject'}],
    // Chapters:[{type:Schema.Types.ObjectId,ref:'Chapter'}],
    // Questions:[{type:Schema.Types.ObjectId,ref:'Questions'}],
    // Classes:[{type:Schema.Types.ObjectId,ref:'Class'}]
    Question:[{type:Schema.Types.ObjectId,ref:'Questions'}]
});

const Option=module.exports=mongoose.model('Option',OptionSchema);
