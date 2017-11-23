import React, {Component} from 'react';
import { Link } from 'react-router';
import { Card, RaisedButton } from 'material-ui';
import {Field, reduxForm} from 'redux-form';
import {PropTypes} from 'prop-types';

import {renderTextField, loginValidation} from '../../../components';
import {FORM_NAMES, USER_LOGIN_FORM_FIELDS, loginUserProp} from '../../../constants';
import { AppLoader } from '../../../components';

class LoginForm extends Component{

    render(){
        const {loader, error, onSubmitHandler, handleSubmit} = this.props;

        return(
                <Card>
                    <form className="login-form" onSubmit={handleSubmit(onSubmitHandler)}>
                        <h2 className="card-heading">Log In</h2>

                        <Field className="field-width" name="email" component={renderTextField} type="email" label="Email"/>
                        <Field className="field-width" name="password" component={renderTextField} type="password" label="Password"/>

                        <div className="error">
                            {error && <span>{error}</span>}
                        </div>
                        
                        <div className="button-line">
                            <RaisedButton type="submit" label="LOG IN" disabled={loader} primary />
                        </div>

                        { loader && <AppLoader></AppLoader>}

                        <div className="addition-link">
                            Don't have an account? <Link to={"/signup"}>Create one</Link>.
                        </div>

                    </form>
                </Card>
        );
    }
}


LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    initialValues: loginUserProp
};

LoginForm = reduxForm({
    form: FORM_NAMES.CREATE_LOGIN_USER,
    validate: loginValidation,
    enableReinitialize: true,
    fields: [
        USER_LOGIN_FORM_FIELDS.EMAIL,
        USER_LOGIN_FORM_FIELDS.PASSWORD
    ],
    initialValues: {
        [USER_LOGIN_FORM_FIELDS.EMAIL]: '',
        [USER_LOGIN_FORM_FIELDS.PASSWORD]: ''
    }
})(LoginForm);

export default LoginForm;