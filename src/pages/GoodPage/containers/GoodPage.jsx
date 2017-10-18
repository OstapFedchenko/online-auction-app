import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import {push} from 'react-router-redux';

import {GoodPageInfo} from '../components';
import {updateGood, deleteGood} from '../../../state';
import { FORM_NAMES, DEFAULT_ROUTE } from '../../../constants';

class GoodPage extends Component{
    constructor(props){
        super(props);

        this.onSubmitGoodHandler = this.onSubmitGoodHandler.bind(this);
        this.onDeleteGoodHandler = this.onDeleteGoodHandler.bind(this);
    }

    onSubmitGoodHandler(good) {
        console.log(good);

        this.props.storeActions.updateGood(good);
        this.props.resetGoodForm();
    }

	onDeleteGoodHandler(good) {
        this.props.storeActions.deleteGood(this.props.good);
        this.props.goToDefault();
    }
    
    render() {
        const { good, categories, goodId } = this.props;
		const isNotFound = !!goodId && !good;
        const infoProps = {
            good,
            categories,
            goodId,
            onSubmitGoodHandler: this.onSubmitGoodHandler,
            onDeleteGoodHandler: this.onDeleteGoodHandler
        };

		if (isNotFound) {
			return <h2> Ooops! Good not found!</h2>;
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
		state.goods.find(good => good.id.toString() === params.id.toString())
});

const mapDispatchToProps = (dispatch) => {
	return {
		storeActions: bindActionCreators({
            updateGood,
            deleteGood
        }, dispatch),
        resetGoodForm: () => dispatch(reset(FORM_NAMES.EDIT_GOOD)),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodPage);