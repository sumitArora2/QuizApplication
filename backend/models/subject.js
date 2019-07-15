const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = mongoose.Schema({
        subject_name: {
            type: String,
            required: true
        },
        Class_Id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        }],
        Chapters: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapter'
        }],
        Questions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        }],
        Options: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }]
});



const Subject = module.exports = mongoose.model('Subject', SubjectSchema);