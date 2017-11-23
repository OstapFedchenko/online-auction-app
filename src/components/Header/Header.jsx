import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {Menu, MenuItem} from 'material-ui';
import { Link } from 'react-router';

import { Search, Logout } from './';
import {logoutUser} from '../../state';
import {DEFAULT_ROUTE, SEARCH_ROUTE, LOGIN_ROUTE} from './../../constants';
import { loading } from '../../services';
import { AppLoader } from '../AppLoader';

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);

        this.onClickSearchHandler = this.onClickSearchHandler.bind(this);
        this.onClickLogOutHandler = this.onClickLogOutHandler.bind(this);
    }
    
    onClickSearchHandler(value) {
       value
       ? this.props.onSearchSubmit(value)
       :  this.props.goToDefault();;
    }

    onClickLogOutHandler() {
        let user = this.props.currentUser;
      
        user.authenticationToken='';
        this.props.storeActions.logoutUser(user).then(result=>{
            localStorage.removeItem(result.id);
            this.props.goToLogin();
        });
    }

    render() {

        const {loading} = this.props;

        return (
            <header className="header">
                <div className="header-conteiner">
                    <div className="header-flex-item empty-control">

                    </div>
                    <div className="header-flex-item search-control">
                        <Search handler={this.onClickSearchHandler}/>
                    </div>
                    <div className="header-flex-item logout-control">
                        <Logout isDisable={loading} handler={this.onClickLogOutHandler}/>
                        <div> { loading && <AppLoader></AppLoader>}</div>
                    </div>
                    <div className="header-flex-item navigation">
                        <Menu className="main-menu">
                            <MenuItem primaryText={<Link to={"/"}>Home</Link>} />
                            <MenuItem primaryText="#" />
                            <MenuItem primaryText="#" />
                            <MenuItem primaryText="#" />
                        </Menu>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.userStore != null && state.userStore.selectedUser,
    loading: loading.isAnyUserActionLoading(state)
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            logoutUser
        }, dispatch),
        onSearchSubmit: value => {
			dispatch(push(`${SEARCH_ROUTE}/${value}`))
        },
        goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`)),
        goToLogin: () => dispatch(push(`${LOGIN_ROUTE}`))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);