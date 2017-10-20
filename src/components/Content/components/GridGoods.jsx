import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import {Good} from './';
import { loading } from '../../../services';
import { AppLoader } from '../../../components';

import './GridGoods.less';

class GridGoods extends Component {

    render() {

        const {goods, onGoodClick} = this.props;

        console.log(goods);

        if (!Array.isArray(goods) || !goods.length) {
            return (
                <div className="no-date">
                    <div>
                        {!loading && <p>There are no items created yet</p> }
                        { loading && <AppLoader></AppLoader>}
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