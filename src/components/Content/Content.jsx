import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import {push} from 'react-router-redux';

import {CategoryList, CreateGoodForm} from './';
import {addGood, addCategory} from '../../state';
import {DEFAULT_ROUTE, FORM_NAMES} from '../../constants';

import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);

        this.onSubmitCategoryHandler = this.onSubmitCategoryHandler.bind(this);
        this.onSubmitGoodHandler = this.onSubmitGoodHandler.bind(this);
    }

    onSubmitCategoryHandler(category) {
        this.props.storeActions.addCategory(category);
        this.props.resetCreateCategoryForm();
    }

    onSubmitGoodHandler(good) {
        console.log(good);

        this.props.storeActions.addGood(good);
        this.props.resetGoodForm();
        this.props.goToDefault();
    }

    render() {
        const {categories}= this.props;
        const goodFormProps= {
            categories,
            onSubmitHandler: this.onSubmitGoodHandler
        };

        return (
            <div className="content">
                <div className="good-actions">
                    <CreateGoodForm {...goodFormProps}/>
                </div>
                <aside className="sidebar">
                    <CategoryList onSubmitCategory={this.onSubmitCategoryHandler}/>
                </aside>
                <div className="layout">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            addCategory,
            addGood
        }, dispatch),
        resetCreateCategoryForm: () => dispatch(reset('category')),
        resetGoodForm: () => dispatch(reset(FORM_NAMES.CreateGoodForm)),
		goToDefault: () => dispatch(push(`${DEFAULT_ROUTE}`))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);