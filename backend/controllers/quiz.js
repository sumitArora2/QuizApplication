const Quiz = require("../models/class");
const Subject = require('../models/subject');
const Chapter = require('../models/chapter');
const Question = require('../models/question');
const Option = require('../models/option');
const Class = require('../models/class');
const User = require('../models/user');
const Marks=require('../models/marks');
module.exports = {

  getDetails: async (req, res) => {
    try {
      console.log("intis")
      let role = req.params.role;
      let result = await User.find({
        role: role
      });
      console.log("result", result);
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
        Subjects: req.params.subjectId
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
      let optLength = req.body.Options.length;
      for (let i = 0; i < optLength; i++) {
        const option = new Option({
          option_name: req.body.Options[i].option_name,
          IsAnswer: req.body.Options[i].IsAnswer,
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
  },
  addMarks: async (req, res) => {
    try {
      const marks = new Marks({
        User: req.params.userId,
        Chapters : req.params.chapterId,
        marks: req.body.marks
      });
      let result1 = await marks.save();
      let result2 = await User.findByIdAndUpdate({
        _id: req.params.userId
      }, {
        $push: {
          Marks: result1._id
        }
      });
      result2 ? res.status(200).send({
          message: 'Marks are saved',
          res: result2
        }) :
        res.status(422).send({
          message: 'Marks are not saved',
          res:result2
        });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getMarks:async(req,res)=>{
    try {
      let result=await User.find({
        _id:req.params.userId
       }).populate({
        path:'Marks',
        populate:{
          path:'Chapters'
        }
      });
      
    result ? res.status(200).send({
      message:'getting the userssss marks',
      res:result
    }) :
    res.status(422).send({
      message:'not getting the users marks',
      res:result
    })  
    } catch (error) {
      res.send(error)
    }
    
  },
  getallStudentsMarks:async(req,res)=>{
    try{
      let role= req.params.role
      console.log("role",role);
      let result =await User.find({
        role:role
      })
    .populate({
      path:'Marks',
      populate:{
        path:'Chapters'
      }
    });
    console.log("result",result);
    result ? res.status(200).send({
      message:'getting user marks',
      res:result
    }):
    res.status(422).send({
      message:'not getting user marks'
    });
    }catch(error){
      res.send(error)
    }
  }
}
