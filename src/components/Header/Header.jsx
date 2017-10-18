import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';

import {goodsApi} from '../../api';
import {searchGoods} from '../../state';

import { Search, Login } from './';

import './Header.less';

class Header extends Component {
    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }
    
    onClickHandler(value) {
       let correctedValue = value.toLowerCase();
       
       goodsApi.searchGoods(correctedValue).then(data=>{this.props.storeActions.searchGoods(data);});
    }

    render() {

        return (
            <header className="header">
                <Row className="header-component">
                    <Col xsPush={2} xs={7}><Search handler={this.onClickHandler}/></Col>
                    <Col xsPush={2} xs={3} className="login-container"><Login/></Col>
                    <Col xs={12}>
                        <ul className="nav nav-tabs">
                            <li><Link to={"/"} activeClassName="active">Main</Link></li>
                            <li role="presentation"><a href="#">Profile</a></li>
                            <li role="presentation"><a href="#">Messages</a></li>
                        </ul>
                    </Col>
                </Row>
            </header>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            searchGoods
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);