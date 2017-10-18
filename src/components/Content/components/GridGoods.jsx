import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import {Good} from './';

import './GridGoods.less';

class GridGoods extends Component {

    render() {

        const {goods, onGoodClick} = this.props;

        console.log(goods);

        if (!Array.isArray(goods) || !goods.length) {
            return (
                <div className="no-date">
                    <div>
                        No data
                    </div>
                </div>
            );
        }

        return (
            <Row>
                {
                    goods.map(good =>
                     <Good 
                        key = { good.id }
                        name = { good.name }
                        author = { good.senderName }
                        img = { good.img} 
                        onClickHandler={ onGoodClick }
                        goodId= { good.id }
                        >
                        {good.body}
                    </Good>
                    )
                }
            </Row>
        );
    }
}

export default GridGoods;