import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { CategoryPageInfo } from '../components';
import { GOOD_ROUTE } from '../../../constants';

class CategoryPage extends Component{

    render(){

        const {goods, onGoodClick} = this.props;
        const componentProps={
            goods,
            onGoodClick
        };

        return(
            <CategoryPageInfo {...componentProps}/>
        );
    }
}

const mapStateToProps = (state, { params } ) => ({
	categoryId: params && params.id,
	goods: params && params.id && 
		state.goods.filter(good => good.categoryId.toString() === params.id.toString())
});

const mapDispatchToProps = (dispatch) => {
	return {
        onGoodClick: id => {
			dispatch(push(`${GOOD_ROUTE}/${id}`))
		},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);