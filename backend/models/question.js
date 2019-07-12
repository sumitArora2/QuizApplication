const Subject=require('./subject');
const Class=require('./class');
const Option=require('./option');
const Chapter=require('./chapter');

const QuestionSchema=mongoose.Schema({
    Questions: [{
        question_name: {
            type: String,
            required: true
        },
        Options:[{type:Schema.Types.ObjectId,ref:'Option'}],
        Classes:[{type:Schema.Types.ObjectId,ref:'Class'}],
        Subjects:[{type:Schema.Types.ObjectId,ref:'Subject'}],
        Chapters:[{type:Schema.Types.ObjectId,ref:'Chapter'}]
    }]
});

const Question=module.exports=mongoose.model('Question',QuestionSchema);

