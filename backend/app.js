const express =require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./routes/route');
const config = require('./config/database');
const bodyparser = require('body-parser');
const passport=require('passport');
const bcrypt=require('bcryptjs');

const port=3000;

// on error
mongoose.connection.on('error',(err)=>{
    console.log('database error',err);
});


// on connection
mongoose.connection.on('connected',()=>{
    console.log('database connected: ' +config.database);
});
// when database is disconnected
mongoose.connection.on('disconnected',()=>{
    console.log('database disconnected');
});
// app.use(express());
// app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
mongoose.connect(config.database);

// fr implementing routes
app.use('/apis',route);

// fr implementing routes
app.get('/',(req,res)=>{
    res.send('hello');
});

//passport Middelware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.listen(port,()=>{
console.log('server start at port '+port);
});
