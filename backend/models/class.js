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
    }]
});

const Class = module.exports = mongoose.model('Class', ClassSchema);