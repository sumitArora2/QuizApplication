const mongoose = require('mongoose');
const Question = require('./question');
const Option = require('./option');
const Subject = require('./subject');
const Class = require('./class');
var Schema = mongoose.Schema;
const ChapterSchema = mongoose.Schema({
    chapter_name: {
        type: String,
        required: true
    },
    Subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    Questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    Classes: [{
        type: Schema.Types.ObjectId,
        ref: 'Class'
    }]
});



const Chapter = module.exports = mongoose.model('Chapter', ChapterSchema);