const Class=require('./class');
const Chapter=require('./chapter');
const Question=require('./question');
const Option=require('./option');

const SubjectSchema=mongoose.Schema({
    Subjects: [{
        subject_name: {
            type: String,
            required: true
        },
        Classes:[{type:Schema.Types.ObjectId,ref:'Class'}],
        Chapters:[{type:Schema.Types.ObjectId,ref:'Chapter'}],
        Questions:[{type:Schema.Types.ObjectId,ref:'Question'}],
        Options:[{type:Schema.Types.ObjectId,ref:'Option'}]
    }]
});


const Subject=module.exports=mongoose.model('Subject',SubjectSchema);