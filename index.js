/**
 * Created by Developer39 on 8/3/2017.
 */


const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/key');
require('./models/user');
require('./services/passport');



mongoose.connect(keys.mongoURL);

const app=express();

app.use(
    cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT=process.env.PORT || 5004 ;
app.listen(PORT);