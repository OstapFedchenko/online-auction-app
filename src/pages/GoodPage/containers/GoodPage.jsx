import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import {push} from 'react-router-redux';

import {GoodPageInfo} from '../components';
import {updateGood, deleteGood, getGood} from '../../../state';
import { FORM_NAMES, DEFAULT_ROUTE } from '../../../constants';
import { loading } from '../../../services';
import { AppLoader } from '../../../components';

class GoodPage extends Component{
    constructor(props){
        super(props);

        this.onSubmitGoodHandler = this.onSubmitGoodHandler.bind(this);
        this.onDeleteGoodHandler = this.onDeleteGoodHandler.bind(this);
    }

    componentDidMount() {
        const { getGood } = this.props.storeActions;

        getGood(this.props.params.id);
    }

    onSubmitGoodHandler(good) {
        console.log(good);

        this.props.storeActions.updateGood(good);
        this.props.resetGoodForm();
    }

	onDeleteGoodHandler(good) {
        this.props.storeActions.deleteGood(this.props.good);
       // this.props.goToDefault();
    }
    
    render() {
        const { good, categories, goodId, loading } = this.props;
		const isNotFound = !!goodId && !good;
        const infoProps = {
            good,
            categories,
            goodId,
            onSubmitGoodHandler: this.onSubmitGoodHandler,
            onDeleteGoodHandler: this.onDeleteGoodHandler
        };

        if (isNotFound) {
            return (
                <div className="no-date">
                    <div>
                        {!loading && <p>Item not found!</p> }
                        { loading && <AppLoader></AppLoader>}
                    </div>
                </div>
            );
        }
        
        return(
            <GoodPageInfo {...infoProps}/>
        );
    }
}

const mapStateToProps = (state, { params } ) => ({
    goodId: params && params.id,
    categories: state.categories,
	good: params && params.id && 
        state.goodStore.selectedGood,
    loading: loading.isAnyGoodActionLoading(state) || loading.isAnyFetchLoading(state)
});

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
            updateGood,
            deleteGood,
            getGood
        }, dispatch),
        resetGoodForm: () => dispatch(reset(FORM_NAMES.EDIT_GOOD)),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodPage);