import React, {Component} from 'react';

import {Good} from './';
import { AppLoader } from '../../../components';

import './GridGoods.css';

class GridGoods extends Component {

    render() {

        const {goods, onGoodClick, loading} = this.props;

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
            <div className="grid-goods-container">
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
            </div>
        );
    }
}

export default GridGoods;