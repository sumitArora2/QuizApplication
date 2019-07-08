const mongoose = require('mongoose');
const QustionSchema=mongoose.Schema({
    dept_name:{
        type:String,
        required:true
    },
    Questions:[
        {
            question_name:{
                type:String,
                required:true
            },Options:[
                {
                    option_name:{
                        type:String,
                        required:true
                    },
                    IsAnswer:{
                        type:String,
                        required:true
                    }
                }
            ]
        }
]
});
const Quiz =module.exports = mongoose.model('Quiz',QustionSchema);

