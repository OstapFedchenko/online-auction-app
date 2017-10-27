import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {SearchPageInfo} from '../components';
import {GOOD_ROUTE} from '../../../constants';
import {searchGoods} from '../../../state';
import { loading } from '../../../services';

class SearchPage extends Component {

    componentDidMount() {
        const {searchGoods} = this.props.storeActions;

        searchGoods(this.props.params.value);
    }

    render() {

        const {goods, onGoodClick, loading} = this.props;
        const componentProps = {
            goods,
            onGoodClick,
            loading
        };

        return (<SearchPageInfo {...componentProps}/>);
    }
}

const mapStateToProps = (state, {params}) => ({
    value: params && params.value,
    goods: params && params.value && state.goodStore.goods,
    loading: loading.isAnyGoodActionLoading(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        storeActions: bindActionCreators({
            searchGoods
        }, dispatch),
        onGoodClick: id => {
            dispatch(push(`${GOOD_ROUTE}/${id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);