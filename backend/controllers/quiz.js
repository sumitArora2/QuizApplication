const Quiz=require('../models/quiz');



async function getQuestions(req,res){
try{

}catch(error){
throw error
}
}

module.exports={
      addQuestion : async(req,res) => {
        try{
         let quiz=new Quiz(req.body);
         let result=await quiz.save();
         res.send(result);
        }catch(error){
        throw(error);
        }
    },  
    getQuestions : async(req,res)=>{
        try{
            // let quiz=new Quiz();
           let result=await Quiz.find();
           res.status(200).send({ message: 'all questions', result: result });
        }catch(error){
            throw(error);
        }
    }
};
