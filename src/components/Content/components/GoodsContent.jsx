import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { reset } from 'redux-form';
import { push } from 'react-router-redux';

import {GridGoods} from './';
import {fetchGoods } from '../../../state';
import {GOOD_ROUTE} from '../../../constants';

class GoodsContent extends Component {
    
    componentDidMount() {
        const { fetchGoods } = this.props.storeActions;

        fetchGoods();
    }

    render() {

        const {goods, onGoodClick} = this.props;
        const gridProperties={
            goods,
            onGoodClick
        };
        return (
            <GridGoods {...gridProperties}/>
        );
    }
}

const mapStateToProps = state => ({
    goods: state.goods
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            fetchGoods
        }, dispatch),
        onGoodClick: id => {
			dispatch(push(`${GOOD_ROUTE}/${id}`))
		},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodsContent);