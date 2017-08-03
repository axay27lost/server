/**
 * Created by Developer39 on 8/3/2017.
 */


const express=require('express');

const app=express();

app.get('/' ,function (req,res) {
    res.send({bye:'Just Wait'});
});


const PORT=process.env.PORT || 5000 ;
app.listen(PORT);