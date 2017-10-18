import React, {Component} from 'react';

import {GridGoods } from '../../../components/Content';

class CategoryPageInfo extends Component{

    render(){

        const {goods, onGoodClick} = this.props;
        const gridProperties={
            goods,
            onGoodClick
        };

        return(
            <GridGoods {...gridProperties}/>
        );
    }
}

export default CategoryPageInfo;