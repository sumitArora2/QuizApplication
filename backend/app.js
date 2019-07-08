const express =require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./routes/route');
const config = require('./config/database');
// const bodyparser = require('body-parser');
const passport=require('passport');
const bcrypt=require('bcryptjs');
const path=require('path');
const cors=require('cors');

const port=3000;

mongoose.connect(config.database,{ useNewUrlParser:true });



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

// app.use(bodyparser.json());

// for implementing routes
app.use('/api',route);

// for implementing routes for checking routes is working of not
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
