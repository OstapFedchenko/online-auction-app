import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {Good} from './';
import goods from '../../../../public/goods.json';

class GridGoods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goods
        };
    }

    render() {

        const {goods} = this.state;
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