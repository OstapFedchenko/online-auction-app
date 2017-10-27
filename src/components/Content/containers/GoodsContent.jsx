import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { push } from 'react-router-redux';

import {GridGoods} from '../components';
import {fetchGoods } from '../../../state';
import {GOOD_ROUTE} from '../../../constants';
import { loading } from '../../../services';

class GoodsContent extends Component {
    
    componentDidMount() {
        const { fetchGoods } = this.props.storeActions;

        fetchGoods();
    }

    render() {

        const {goods, onGoodClick, loading} = this.props;
        const gridProperties={
            goods,
            onGoodClick,
            loading
        };

        return (
            <GridGoods {...gridProperties}/>
        );
    }
}

const mapStateToProps = state => ({
    goods: state.goodStore.goods,
    loading: loading.isAnyGoodActionLoading(state) || loading.isAnyFetchLoading(state)
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