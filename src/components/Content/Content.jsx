import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import {push} from 'react-router-redux';

import {CategoryList, CreateGoodForm} from './';
import {fetchGoods, fetchCategories, addGood, addCategory} from '../../state';
import {CATEGORY_ROUTE, DEFAULT_ROUTE, FORM_NAMES} from '../../constants';

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
                <Row>
                    <Col xs={12} className="new-good-container">
                        <CreateGoodForm {...goodFormProps}/>
                    </Col>
                    <Col xs={2}>
                        <CategoryList onSubmitCategory={this.onSubmitCategoryHandler}/>
                    </Col>
                    <Col xs={10}>
                        {this.props.children}
                    </Col>
                </Row>
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