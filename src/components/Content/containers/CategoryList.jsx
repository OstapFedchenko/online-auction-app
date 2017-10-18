import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Glyphicon} from 'react-bootstrap';
import { push } from 'react-router-redux';

import {fetchCategories} from '../../../state';
import {CategoryForm} from '../components';
import {CATEGORY_ROUTE} from '../../../constants';

import './CategoryList.less';

class CategoryList extends Component {

    componentDidMount() {
        const { fetchCategories } = this.props.storeActions;

        fetchCategories();
    }

    render() {
        const {categories, onSubmitCategory, onCategoryClick} = this.props;

        return (
            <div className="category-wrapper">
                <ul className="category-list list-group">
                    {
                        categories.map(category =>
                            <li className="category-item list-group-item" 
                                key={category.id}
                                onClick={()=> onCategoryClick(category.id)}>
                                {category.name}
                            </li>
                        )
                    }
                </ul>
                <CategoryForm onSubmitHandler={onSubmitCategory}/>
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
            fetchCategories
        }, dispatch),
        onCategoryClick: id => {
			dispatch(push(`${CATEGORY_ROUTE}/${id}`))
		}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
