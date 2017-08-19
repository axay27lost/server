/**
 * Created by Developer39 on 8/18/2017.
 */


import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import {withRouter} from 'react-router-dom';
import * as action from '../../actions';

const SurveyFormReview=({onCancel,formValues,submitSurvey,history})=>{

    const reviewFields=_.map(formFields,({name,label})=>{
       return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
       );
    });

    return (
        <div>
            <h5>Please Confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel} >Back</button>

            <button className="green btn-flat right" onClick={()=> submitSurvey(formValues,history)}>
                Send Survey
                <i className="material-icons right white-text">email</i>
            </button>
        </div>
    );
};
function mapStateToProps(state) {
    return{
        formValues:state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,action)(withRouter(SurveyFormReview));