/**
 * Created by Developer39 on 8/15/2017.
 */
const mongoose =require('mongoose');
const requireLogin= require('../middlewares/requireLogin');
const requireCredits=require('../middlewares/requireCredits');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
const Mailer = require('../services/Mailer');
const Survey=mongoose.model('surveys');

module.exports = app =>{
    app.post('/api/surveys',requireLogin,requireCredits,(req,res)=>{
        const {title,subject,body,recipients} = req.body;

        const surveys=new Survey({
            title,
            subject,
            body,
            recipients:recipients.split(',').map(email=>  ({email:email.trim()})),
            _user:req.user.id,
            dataSent:Date.now()
        });
        
    });
};