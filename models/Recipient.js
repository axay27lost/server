/**
 * Created by Developer39 on 8/15/2017.
 */

const mongoose = require('mongoose');
const {Schema} =mongoose;

const recipientSchema = new Schema({
    email:String,
    responded:{type:Boolean,default:false}
});

module.exports = recipientSchema;
