import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-bootstrap';

import {goodsApi} from '../../api';
import {searchGoods} from '../../state';

import { Search, NewGood, Login } from './';

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
                    <Col xs={2} className="new-good-container"><NewGood/></Col>
                    <Col xs={7}><Search handler={this.onClickHandler}/></Col>
                    <Col xs={3} className="login-container"><Login/></Col>
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