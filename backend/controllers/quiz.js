const Quiz=require('../models/quiz');

async function addQuestion(req,res){
    try{
     console.log(req.body);
     let quiz=new Quiz(req.body);
     let result=await quiz.save();
     res.send(result);
    }catch(error){
    throw(error);
    }
}


module.exports.addQuestion=addQuestion;