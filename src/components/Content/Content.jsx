import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {GridGoods, CategoryList} from './';
import {fetchGoods, fetchCategories} from '../../state';

class Content extends Component {

    componentDidMount() {
        const {fetchCategories, fetchGoods} = this.props.storeActions;

        console.log('loading goods...');
        fetchGoods();

        console.log('loading categories...')
        fetchCategories();
    }

    onSubmitCategoryHandler(event){
        console.log(event);
    }

    render() {
        const {goods, categories} = this.props;

        return (
            <div className="content">
                <Row>
                    <Col xsPull={1} xsPush={1} xs={10}>
                        <CategoryList categories={categories} onSubmitHandler={this.onSubmitCategoryHandler}/>
                    </Col>
                </Row>
                <GridGoods goods={goods}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    goods: state.goods,
    categories: state.categories
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            fetchCategories,
            fetchGoods
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);