import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {Good} from './';

class GridGoods extends Component {

    render() {

        const {goods} = this.props;
        console.log(goods);

        return (
            <Row>
                {
                    goods.map(good =>
                     < Good 
                        key = { good.id }
                        name = { good.name }
                        author = { good.senderName }
                        img = { good.img}>
                        {good.body}
                        </Good>
                    )
                }
            </Row>
        );
    }
}

export default GridGoods;