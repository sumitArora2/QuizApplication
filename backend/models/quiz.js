const mongoose = require('mongoose');
const QustionSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    question:[
        {
            name:{
                type:String,
                required:true
            },Options:[
                {
                    name:{
                        type:String,
                        required:true
                    },
                    IsAnswer:{
                        type:String,
                        required:true,
                    }
                }
            ]
        }
    ]
});
const Quiz =module.exports = mongoose.model('Quiz',QustionSchema);


module.exports.addQuestion=function(newQuestion,callback){
Question.create(newQuestion,callback);
};
