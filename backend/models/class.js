const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ClassSchema = mongoose.Schema({
      class_name: {
        type: String,
        required: true,
        unique: false
    },
    Subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    Chapters: [{
        type: Schema.Types.ObjectId,
        ref: 'Chapter'
    }],
    Questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Questions'
    }],
    Options: [{
        type: Schema.Types.ObjectId,
        ref: 'Option'
    }]
});

const Class = module.exports = mongoose.model('Class', ClassSchema);