const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const QuestionSchema = mongoose.Schema({
    question_name: {
        type: String,
        required: true
    },
    Chapters: [{
        type: Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    Options: [{
        type: Schema.Types.ObjectId,
        ref: 'Option'
    }]
});

const Question = module.exports = mongoose.model('Question', QuestionSchema);