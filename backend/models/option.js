const mongoose = require('mongoose');

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
    Question:[{type:Schema.Types.ObjectId,ref:'Questions'}]
});



const Option=module.exports=mongoose.model('Option',OptionSchema);
