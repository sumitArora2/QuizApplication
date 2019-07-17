const Quiz = require("../models/class");
const Subject = require('../models/subject');
const Chapter = require('../models/chapter');
const Question = require('../models/question');
const Option = require('../models/option');
const Class = require('../models/class');
module.exports = {

  addClass: async (req, res) => {
    // console.log("in routing and received");
    try {
      let classes = new Class(req.body);
      // console.log("in quiz", classes);
      const result = await classes.save();
      result ? res.status(200).send({
          message: 'classes are saved',
          res: result
        }) :
        res.status(422).send({
          message: 'classes are not saved',
          res: result
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getClass: async (req, res) => {
    try {
      const result = await Class.find({}).populate('Subjects');
      // console.log("result", result);
      result ? res.status(200).send({
          message: 'Success',
          res: result
        }) :
        res.status(422).send({
          message: 'Failure',
          res: result
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getSpecificClass: async (req, res) => {
    try {
      const result = await Class.findById({
        _id: req.params.classId
      });
      result ? res.status(200).send({
          message: 'particular class received',
          res: result
        }) :
        res.status(422).send({
          message: 'particular class not received',
          res: result
        })
    } catch (error) {
      throw error;
    }

  },
  deleteClass: async (req, res) => {
    try {
      const result = await Class.findByIdAndDelete({
        _id: req.params.classId
      });
      result ? res.status(200).send({
          message: 'class deleted successfully',
          res: result
        }) :
        res.status(422).send({
          message: 'class not deleted'
        });
    } catch (error) {
      throw eror;
    }
  },
  updateClass: async (req, res) => {
    try {
      console.log("req.body",req.body);
      console.log("id",req.params.classId);
      const result = await Class.findOneAndUpdate({
        _id: req.params.classId
      }, {
        class_name: req.body.class_name
      });
      // console.log("result", result);
      result ? res.status(200).send({
          message: 'class name update successfully',
          res: result
        }) :
        res.status(422).send({
          message: 'class name not updated',
          res: result
        });
    } catch (error) {
      throw error;
    }
  },
  addSubject: async (req, res) => {
    try {
      let subject = new Subject({
        subject_name: req.body.subjectname,
        Class_Id: req.params.classId
      });
      let result = await subject.save();
      let result2 = await Class.findByIdAndUpdate({
        _id: req.params.classId
      }, {
        $push: {
          'Subjects': result._id
        }
      });
      result ? res.status(200).send({
        message: 'subjects are saved',
        res: result
      }) : res.status(422).send({
        message: 'subjects re not saved',
        res: result
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getSubject: async (req, res) => {
    try {
      const result = await Subject.find({}).populate('Class_Id');
      result ? res.status(200).send({
          message: 'Success',
          res: result
        }) :
        res.status(422).send({
          message: 'Failure',
          res: result
        });
      // console.log(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  addChapter: async (req, res) => {
    try {
      // console.log("hare rama here rama");
      const chapter = new Chapter({
        Chapters: [{
          chapter_name: req.body.chapter_name,
          Classes: [req.params.classId],
          Subjects: [req.params.subjectId]
        }]
      });
      const result = await chapter.save();
      result ? res.status(200).send({
        message: 'chapters are saved',
        res: result
      }) : req.status(422).send({
        message: 'chapters are not saved',
        res: result
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  addQuestion: async (req, res) => {
    try {
      // console.log("req.params.classId", req.params.classId);

      const question = new Question({
        Questions: [{
          question_name: req.body.question_name,
          Classes: [req.params.classId],
          Subjects: [req.params.subjectId],
          Chapters: [req.params.chapterId]
        }]
      });
      const result = await question.save();
      result ? res.status(200).send({
          message: 'Questions are saved',
          res: result
        }) :
        res.status(422).send({
          message: 'Questions are not saved'
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  addOption: async (req, res) => {
    try {
      // console.log(req.body)
      // return res.send("Done")
      // let option = new Option({
      //   Options: [{
      //     option_name: req.body.option_name,
      //     IsAnswer: req.body.IsAnswer,
      //     Questions: [req.params.questionId]
      //   }]
      // });
      // req.body.Options = req.body.Options.map(
      //   (option)=>{
      //     option['Subjects']=[req.params.questionId];
      //     return option;
      //   }
      // );
      let option = new Option({
        Options: req.body.Options,
        Question: [req.params.questionId]
      });
      console.log("req.bodysssssssssssss", req.body);
      let result = await option.save();
      result ? res.status(200).send({
          message: 'Options are saved',
          res: result
        }) :
        res.status(422).send({
          message: 'Options are not saved',
          res: result
        })

    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getQuestions: async (req, res) => {
    try {
      const result = await Quiz.find();
      result ?
        res.status(200).send({
          message: "Here are the questions",
          result: result
        }) :
        res.status(422).send({
          message: "questions are not getting",
          result: result
        })
    } catch (error) {
      throw error;
    }
  },
  addMoreQuestion: async (req, res) => {
    const newQuestion = req.body;
    try {
      let result = await Quiz.findByIdAndUpdate({
        _id: SubId
      }, {
        $push: {
          Questions: newQuestion
        }
      });
      res.status(200).send({
        message: "adding more question",
        result: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  DeleteQuestion: async (req, res) => {
    var SubId = req.params.subjectId;
    var QuesId = req.params.questionId;
    console.log(QuesId, " ", SubId);
    try {
      const result = await Quiz.findByIdAndUpdate({
        _id: SubId
      }, {
        $pull: {
          Questions: {
            _id: QuesId
          }
        }
      });
      result ? res.status(200).send({
          message: 'data Deleted',
          res: result
        }) :
        res.status(422).send({
          message: 'Data Not Deleted',
          res: result
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};


// "Options":[{
//   "option_name":"JavaScript is a lightweight, interpreted programming language.",
//   "IsAnswer":"false"
// },
// {
//   "option_name":"JavaScript is designed for creating network-centric applications",
//   "IsAnswer":"false"
// },
// {
//   "option_name":"JavaScript is complementary to and integrated with Java.",
//   "IsAnswer":"false"
// },
// {
//   "option_name":"All of the above.",
//   "IsAnswer":"true"
// }
// ]