import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {Menu, MenuItem} from 'material-ui';
import { Link } from 'react-router';

import { Search, Login } from './';
import {DEFAULT_ROUTE, SEARCH_ROUTE} from './../../constants';

import './Header.css';

class Header extends Component {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    
    onClickHandler(value) {
       let correctedValue = value.toLowerCase();
  
       correctedValue
       ? this.props.onSearchSubmit(correctedValue)
       :  this.props.goToDefault();;
    }

    render() {

        return (
            <header className="header">
                <div className="header-conteiner">
                    <div className="header-flex-item empty-control">

                    </div>
                    <div className="header-flex-item search-control">
                        <Search handler={this.onClickHandler}/>
                    </div>
                    <div className="header-flex-item login-control">
                        <Login/>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        onSearchSubmit: value => {
			dispatch(push(`${SEARCH_ROUTE}/${value}`))
        },
        goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);