/**
 * Created by Developer39 on 8/19/2017.
 */
import {FETCH_SURVEYS} from '../actions/types';

export default function (state=[],action) {
    switch (action.type)
    {
        case FETCH_SURVEYS:
            return action.payload;
        default:
            return state;
    }
}