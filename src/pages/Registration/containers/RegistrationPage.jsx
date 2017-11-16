import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';

import {RegistrationForm} from '../components';
import {DEFAULT_ROUTE} from '../../../constants';
import {addUser} from '../../../state';

import './RegistrationPage.css';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmitRegistrationHandler = this.onSubmitRegistrationHandler.bind(this);
    }

    onSubmitRegistrationHandler(user){
        console.log(user);

        this.props.storeActions.addUser(user);
    }
    render() {

        return (
            <div className="signup-page">
                <header className="header">
                    <div className="left-section">

                    </div>
                    <div className="right-section">
                        <span>Log In</span>
                        <span>Sign Up</span>

                    </div>
                </header>
                <div className="content">
                    <RegistrationForm onSubmitHandler={this.onSubmitRegistrationHandler} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
            addUser
        }, dispatch),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);