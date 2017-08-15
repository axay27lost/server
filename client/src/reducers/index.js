/**
 * Created by Developer39 on 8/9/2017.
 */

import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
   auth:authReducer
});