/**
 * Created by Developer39 on 8/17/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashbord=()=>{
    return(
        <div>
            <SurveyList/>
            <div className="fixed-action-btn">
                <Link className="btn-floating btn-large red" to="/surveys/new">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
}

export default Dashbord;