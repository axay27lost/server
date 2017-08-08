/**
 * Created by Developer39 on 8/3/2017.
 */

const mongoose=require('mongoose');
const Schema = mongoose.Schema;
//const { Schema } = mongoose;

const userSchema = new Schema({
   googleId:String
});

mongoose.model('users',userSchema);