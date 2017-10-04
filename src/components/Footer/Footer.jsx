import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component{

    render(){

        return (
            <footer className="footer navbar-fixed-bottom">
                <Row>
                    <Col xs={3}>Left Footer component</Col>
                    <Col xs={6}>Middle Footer component</Col>
                    <Col xs={3}>Right Footer commonent</Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;