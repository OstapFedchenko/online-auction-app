import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Thumbnail, Col, Button} from 'react-bootstrap';

import ('./Good.less');

class Good extends Component {

    render() {

        return (
            <Col xs={6} md={2} className="good">
                <Thumbnail src={this.props.img} alt="242x200">
                    <h3>{this.props.name}</h3>
                    <p className="content">{this.props.children}</p>
                    <p className="author">{this.props.author}</p>
                    <p>
                        <Button bsStyle="info" className="view-button">View</Button>
                    </p>
                </Thumbnail>
            </Col>
        );
    }
}

export default Good;