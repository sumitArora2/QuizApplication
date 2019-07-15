const Quiz = require("../models/class");

module.exports = {
  addQuestion: async (req, res) => {
    try {
      let quiz = new Quiz(req.body);
      const result = await quiz.save();
       result ? res.status(200).send({message : 'data posted', res:result}) : 
       res.status(422).send({message:'data not posted due to symentic errors'})
    } catch (error) {
      console.log(error);
    res.send(error);
    }
  }, 
  getQuestions: async (req, res) => {
    try {
      let result = await Quiz.find();
      res.status(200).send({ message: "all questions", result: result });
    } catch (error) {
      throw error;
    }
  },
  addMoreQuestion: async (req, res) => {
    var newQuestion = req.body;
    var SubId = req.params.id;
    try {
      let result = await Quiz.findByIdAndUpdate({ _id: SubId }, { $push:{Questions: newQuestion} });
      res.status(200).send({ message: "adding more question", result: result });
    } catch (error) {
      console.log(error);
    }
  },
  DeleteQuestion: async(req, res) => {
    var SubId =req.params.subjectId; 
    var QuesId = req.params.questionId;
    console.log(QuesId," ",SubId);
    try {
      const result = await Quiz.findByIdAndUpdate({ _id: SubId },{ $pull:{ Questions:{_id: QuesId} }});
      result ? res.status(200).send({ message: 'data Deleted', res: result })
      : res.status(422).send({ message: 'Data Not Deleted', res: result });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};
