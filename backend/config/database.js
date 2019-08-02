const ENV=require('dotenv');
ENV.config();
module.exports={
     database:`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@quizdb-kpopc.mongodb.net/test?retryWrites=true&w=majority`,
    secret: `${process.env.CLIENT_SECRET}`
};
