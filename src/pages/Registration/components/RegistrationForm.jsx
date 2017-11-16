import React, {Component} from 'react';
import { Card, RaisedButton } from 'material-ui';
import {Field, reduxForm} from 'redux-form';
import {PropTypes} from 'prop-types';

import {renderTextField, signupValidation} from '../../../components';
import {FORM_NAMES, USER_REGISTRATION_FORM_FIELDS, signUpUserProp} from '../../../constants';

import './RegistrationForm.css';

class RegistrationForm extends Component{

    render(){
        const {onSubmitHandler, handleSubmit} = this.props;

        return(
                <Card>
                    <form className="registration-form" onSubmit={handleSubmit(onSubmitHandler)}>
                        <h2 className="card-heading">Sign Up</h2>

                        <Field className="field-width" name="firstName" component={renderTextField} label="First Name"/>
                        <Field className="field-width" name="lastName" component={renderTextField} label="Last Name"/>
                        <Field className="field-width" name="email" component={renderTextField} type="email" label="Email"/>
                        <Field className="field-width" name="password" component={renderTextField} type="password" label="Password"/>
                        <Field className="field-width" name="confirmPassword" component={renderTextField} type="password" label="Confirm Password"/>

                        <div className="button-line">
                            <RaisedButton type="submit" label="CREATE NEW ACCOUNT" primary />
                        </div>
                    </form>
                </Card>
        );
    }
}

RegistrationForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: signUpUserProp
};

RegistrationForm = reduxForm({
    form: FORM_NAMES.CREATE_SIGNUP_USER,
    validate: signupValidation,
    enableReinitialize: true,
    fields: [
        USER_REGISTRATION_FORM_FIELDS.FIRST_NAME,
        USER_REGISTRATION_FORM_FIELDS.LAST_NAME,
        USER_REGISTRATION_FORM_FIELDS.EMAIL,
        USER_REGISTRATION_FORM_FIELDS.PASSWORD,
        USER_REGISTRATION_FORM_FIELDS.CONFIRM_PASSWORD
    ],
    initialValues: {
        [USER_REGISTRATION_FORM_FIELDS.FIRST_NAME]: '',
        [USER_REGISTRATION_FORM_FIELDS.LAST_NAME]: '',
        [USER_REGISTRATION_FORM_FIELDS.EMAIL]: '',
        [USER_REGISTRATION_FORM_FIELDS.PASSWORD]: '',
        [USER_REGISTRATION_FORM_FIELDS.CONFIRM_PASSWORD]: ''
    }
})(RegistrationForm);

export default RegistrationForm;