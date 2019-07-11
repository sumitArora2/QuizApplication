const Quiz = require("../models/quiz");

module.exports = {
  addQuestion: async (req, res) => {
    try {
      let quiz = new Quiz(req.body);
      let result = await quiz.save();
      res.send(result);
    } catch (error) {
      throw error;
    }
  },
  getQuestions: async (req, res) => {
    try {
      // let quiz=new Quiz();
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
      let result = await Quiz.updateOne({ _id: SubId }, { $push:{Questions: newQuestion} });
      res.status(200).send({ message: "adding more question", result: result });
    } catch (error) {
      console.log(error);
    }
  },
  DeleteQuestion: async(req, res) => {
    var SubId = req.params.id;
    var QuesId =req.params.id; 
    try {
      let result = await Quiz.deleteOne({ _id: QuesId }, { $push:{Questions: newQuestion} });
      res.status(200).send({ message: "adding more question", result: result });
    } catch (error) {
      console.log(error);
    }
  }
};
