const Question=require('./question');
const Option=require('./option');
const Subject=require('./subject');
const Class=require('./class');

const ChapterSchema=mongoose.Schema({
    Chapters: [{
        chapter_name: {
            type: String,
            required: true
        },
        Subjects:[{type:Schema.Types.ObjectId,ref:'Subject'}],
        Questions:[{type:Schema.Types.ObjectId,ref:'Question'}],
        Options:[{type:Schema.Types.ObjectId,ref:'Option'}],
        Classes:[{type:Schema.Types.ObjectId,ref:'Class'}]
    }]
});

const Chapter=module.exports=mongoose.model('Chapter',ChapterSchema);