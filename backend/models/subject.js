const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = mongoose.Schema({
        subject_name: {
            type: String,
            required: true,
            unique:true
        },
        Class_Id: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Class'
        }],
        Chapters: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chapter'
        }]
});



const Subject = module.exports = mongoose.model('Subject', SubjectSchema);