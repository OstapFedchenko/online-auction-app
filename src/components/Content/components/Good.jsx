import React, {Component} from 'react';
import {Thumbnail, Col, Button} from 'react-bootstrap';

import ('./Good.less');

class Good extends Component {

    render() {
        const {onClickHandler, goodId, img, name, author} = this.props;

        return (
            <Col xs={6} md={2} className="good">
                <Thumbnail src={img} alt="242x200">
                    <h3>{name}</h3>
                    <p className="content">{this.props.children}</p>
                    <p className="author">{author}</p>
                    <p>
                        <Button bsStyle="info" className="view-button" onClick={()=> onClickHandler(goodId)}>View</Button>
                    </p>
                </Thumbnail>
            </Col>
        );
    }
}

export default Good;