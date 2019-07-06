const mongoose = require('mongoose');
const QustionSchema=mongoose.Schema({
    dept_name:{
        type:String,
        required:true
    },
    question:[
        {
            ques_name:{
                type:String,
                required:true
            },Options:[
                {
                    opts_name:{
                        type:String,
                        required:true
                    },
                    isAnswer:{
                        type:String,
                        required:true
                    }
                }
            ]
        }
]
});
const Quiz =module.exports = mongoose.model('Quiz',QustionSchema);


module.exports.addQuestion=function(newQuestion,callback){
Quiz.create(newQuestion,callback);
};
