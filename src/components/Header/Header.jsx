import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import { Search } from './';

import './Header.less';

class Header extends Component {

    render() {

        return (
            <header className="header">
                <Row className="header-component">
                    <Col xs={2}>Left header component</Col>
                    <Col xs={7}><Search/></Col>
                    <Col xs={3}>Right header component</Col>
                </Row>
            </header>
        );
    }
}

export default Header;