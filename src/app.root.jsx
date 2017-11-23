import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';

import {getUser} from './state';
import {DEFAULT_ROUTE, LOGIN_ROUTE} from './constants';
import {Header, Content, Footer, PublicHeader} from './components';

class App extends Component {

    componentDidMount() {
        let keys = Object.keys(localStorage);
        if (!this.props.isAuthenticated && keys.length > 0) {

            this.props.storeActions.getUser(keys[0]).then(result => {
                    if (result != null) 
                        this.props.goToDefault();
                });
        } else {
            this.props.goToLogin();
        }
    }

    render() {
        const {isAuthenticated} = this.props;
        return (isAuthenticated
            ? <div className="private-layout">
                    <Header/>
                    <Content {...this.props}/>
                    <Footer/>
                </div>
            : <div className="public-layout">
                <PublicHeader/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>);
    }
};

const mapStateToProps = state => ({
    isAuthenticated: state.userStore != null && state.userStore.selectedUser != null
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            getUser
        }, dispatch),
        goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`)),
        goToLogin: () => dispatch(push(`${LOGIN_ROUTE}`))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);