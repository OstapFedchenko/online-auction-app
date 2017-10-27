import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {CategoryPageInfo} from '../components';
import {GOOD_ROUTE} from '../../../constants';
import {getGoodsForCategoy} from '../../../state';
import { loading } from '../../../services';

class CategoryPage extends Component {

    componentDidMount() {
        const {getGoodsForCategoy} = this.props.storeActions;

        getGoodsForCategoy(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categoryId !== this.props.params.id) {
            const {getGoodsForCategoy} = this.props.storeActions;
         
            getGoodsForCategoy(nextProps.categoryId);
        }
    }

    render() {

        const {goods, onGoodClick, loading} = this.props;
        const componentProps = {
            goods,
            onGoodClick,
            loading
        };

        return (<CategoryPageInfo {...componentProps}/>);
    }
}

const mapStateToProps = (state, {params}) => ({
    categoryId: params && params.id,
    goods: params && params.id && state.goodStore.goods,
    loading: loading.isAnyGoodActionLoading(state) || loading.isAnyFetchLoading(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        storeActions: bindActionCreators({
            getGoodsForCategoy
        }, dispatch),
        onGoodClick: id => {
            dispatch(push(`${GOOD_ROUTE}/${id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);