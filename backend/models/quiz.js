const express =require('express');
const mongoose = require('mongoose');
// fr schema
const QuizSchema = mongoose.Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
        required:true
    },
    questions:[{
        id:{
            type:Number
        },
        name:{
            type:String,
            required:true
        },
        options:[{
            id:{
                type:Number
            },
            name:{
                type:String,
                required:true
            },
            isAnswer:{
                type:Boolean
            }
        }]
    }]
});
const Quiz = module.exports =mongoose.model('Quiz',QuizSchema);
module.exports.getQuizById=function(id,callback){
    Quiz.findById('id,callback');
}
module.exports.addQuiz= function(newQuiz,callback){
    console.log('registered');
}