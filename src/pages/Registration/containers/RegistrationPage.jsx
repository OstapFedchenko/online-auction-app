import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {push} from 'react-router-redux';

import {RegistrationForm} from '../components';
import {DEFAULT_ROUTE} from '../../../constants';
import {addUser} from '../../../state';
import { loading } from '../../../services';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.onSubmitRegistrationHandler = this
            .onSubmitRegistrationHandler
            .bind(this);
    }

    onSubmitRegistrationHandler(user) {

        return this.props.storeActions.addUser(user).then(result => {
                if (result != null) {
                    localStorage.setItem(result.id, result.authenticationToken);
                    this.props.goToDefault();
                }
            });
    }

    render() {
        const {loading} = this.props;
        return (<RegistrationForm loader={loading} onSubmitHandler={this.onSubmitRegistrationHandler}/>);
    }
}

const mapStateToProps = state => ({
    loading: loading.isAnyUserActionLoading(state)
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