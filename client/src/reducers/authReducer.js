/**
 * Created by Developer39 on 8/9/2017.
 */
import {FETCH_USER} from '../actions/types';
export default function (state=null,action) {
    //console.log(action);
    switch (action.type)
    {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}