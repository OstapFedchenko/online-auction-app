import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';

import {LoginForm} from '../components';
import {DEFAULT_ROUTE} from '../../../constants';
import {loginUser} from '../../../state';
import { loading } from '../../../services';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmitLoginHandler = this
            .onSubmitLoginHandler
            .bind(this);
    }

    onSubmitLoginHandler(user) {
        console.log(user);

        return this.props.storeActions.loginUser(user).then(result => {

                if (result != null) {
                    localStorage.setItem(result.id, result.authenticationToken);
                    this.props.goToDefault();
                }
            });
    }

    render() {
        const {loading} = this.props;

        return (
            <LoginForm loader={loading} onSubmitHandler={this.onSubmitLoginHandler} />
        );
    }
}

const mapStateToProps = state => ({
    loading: loading.isAnyUserActionLoading(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        storeActions: bindActionCreators({
            loginUser
        }, dispatch),
        goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
