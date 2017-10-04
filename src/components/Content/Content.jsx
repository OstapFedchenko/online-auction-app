import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import { GridGoods } from './';

class Content extends Component {

    render() {

        return (
            <div className="content">
                <Row>
                    <Col xsPull={1} xsPush={1} xs={10}>Category component</Col>
                </Row>
                    <GridGoods/>
            </div>
        );
    }
}

export default Content;