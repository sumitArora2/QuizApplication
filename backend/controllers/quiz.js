const Quiz = require("../models/class");
const Subject = require('../models/subject');
const Chapter = require('../models/chapter');
const Question = require('../models/question');
const Option = require('../models/option');
const Class = require('../models/class');
const User=require('../models/user');
module.exports = { 

  getDetails:async(req,res)=>{
 try {
   console.log("intis")
   let role=req.params.role;
   let result=await User.find({
     role:role
   });
   console.log("result",result);
   result ? res.status(200).send({
    message: 'getting the results',
    res: result
  }) :
  res.status(422).send({
    message: 'results are not saved',
    res: result
  });
} catch (error) {
console.log(error);
res.send(error);
}
},

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
      }).populate('Subjects');
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
      let result = await Class.findByIdAndDelete({
        _id: req.params.classId
      });
      result = await Subject.find({
        Class_Id: req.params.classId
      }).remove();

      result ? res.status(200).send({
          message: 'class deleted successfully',
          res: result
        }) :
        res.status(422).send({
          message: 'class not deleted'
        });
    } catch (error) {
      throw error;
    }
  },
  updateClass: async (req, res) => {
    try {
      console.log("req.body", req.body);
      console.log("id", req.params.classId);
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
  //subjects are added on the basis of there respective classes
  addSubject: async (req, res) => {
    try {
      let subject = new Subject({
        subject_name: req.body.subjectname,
        Class_Id: req.params.classId
      });
      let result = await subject.save();
      //add the same subject into the class
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
  //update the subjects on the basis of class and update the subject in class table also
  updateSubject: async (req, res) => {
    try {
      let subject = new Subject({
        subject_name: req.body.subject_name,
        Class_Id: req.params.classId
      });
      let result = await Class.findByIdAndUpdate({
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
      const chapter = new Chapter({
          chapter_name: req.body.chapter_name,
          Classes: [req.params.classId],
          Subjects: [req.params.subjectId]
      });
      let result = await chapter.save();
      let result2 = await Subject.findByIdAndUpdate({
        _id: req.params.subjectId
      }, {
        $push: {
          Chapters: result._id
        }
      });
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
  //get chapter through the subject id
  getChapters: async (req, res) => {
    try {
      let result = await Chapter.find({
        Subjects:req.params.subjectId
      });
      result ? res.status(200).send({
        message: 'Chapters received successfully',
        res: result
      }) : req.status(422).send({
        message: 'chapters not received',
        res: result
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  addQuestion: async (req, res) => {
    try {
      const question = new Question({
          question_name: req.body.question_name,
          Chapters: req.params.chapterId
      });
      const result = await question.save();
      let optLength=req.body.Options.length;
      for(let i=0;i<optLength;i++){
        const option=new  Option({
          option_name:req.body.Options[i].option_name,
          IsAnswer:req.body.Options[i].IsAnswer,
          Question: result._id
        });
          const result2 = await option.save();
           result3 = await Question.findByIdAndUpdate({
            _id: result._id
          }, {
            $push: {
              Options: result2._id
            }
          });  
        }
      result3 ? res.status(200).send({
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
  // addOption: async (req, res) => {
  //   try {
  //     let option = new Option({
  //       Options: req.body.Options,
  //       Question: [req.params.questionId]
  //     });
  //     console.log("req.bodysssssssssssss", req.body);
  //     let result = await option.save();
  //     result ? res.status(200).send({
  //         message: 'Options are saved',
  //         res: result
  //       }) :
  //       res.status(422).send({
  //         message: 'Options are not saved',
  //         res: result
  //       })

  //   } catch (error) {
  //     console.log(error);
  //     res.send(error);
  //   }
  // },
  getQuestions: async (req, res) => {
    try {
      const result = await Question.find().populate('Options').populate('Chapters');
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
  }
  // addMoreQuestion: async (req, res) => {
  //   const newQuestion = req.body;
  //   try {
  //     let result = await Quiz.findByIdAndUpdate({
  //       _id: SubId
  //     }, {
  //       $push: {
  //         Questions: newQuestion
  //       }
  //     });
  //     res.status(200).send({
  //       message: "adding more question",
  //       result: result
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  // DeleteQuestion: async (req, res) => {
  //   var SubId = req.params.subjectId;
  //   var QuesId = req.params.questionId;
  //   console.log(QuesId, " ", SubId);
  //   try {
  //     const result = await Quiz.findByIdAndUpdate({
  //       _id: SubId
  //     }, {
  //       $pull: {
  //         Questions: {
  //           _id: QuesId
  //         }
  //       }
  //     });
  //     result ? res.status(200).send({
  //         message: 'data Deleted',
  //         res: result
  //       }) :
  //       res.status(422).send({
  //         message: 'Data Not Deleted',
  //         res: result
  //       });
  //   } catch (error) {
  //     console.log(error);
  //     res.send(error);
  //   }
  // }
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