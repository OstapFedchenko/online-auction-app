import React, {Component} from 'react';

import {GridGoods } from '../../../components/Content';

class SearchPageInfo extends Component{

    render(){

        const {goods, onGoodClick, loading} = this.props;
        const gridProperties={
            goods,
            onGoodClick,
            loading
        };

        return(
            <GridGoods {...gridProperties}/>
        );
    }
}

export default SearchPageInfo;