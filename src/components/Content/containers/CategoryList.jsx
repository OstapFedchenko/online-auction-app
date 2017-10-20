import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Glyphicon} from 'react-bootstrap';
import { push } from 'react-router-redux';

import {fetchCategories} from '../../../state';
import { CategoryForm, AppLoader } from '../../../components';
import {CATEGORY_ROUTE} from '../../../constants';
import { loading } from '../../../services';

import './CategoryList.less';

class CategoryList extends Component {

    componentDidMount() {
        const { fetchCategories } = this.props.storeActions;

        fetchCategories();
    }

    render() {
        const {categories, onSubmitCategory, onCategoryClick} = this.props;

        if (!Array.isArray(categories) || !categories.length) {
            return (
                <div className="no-date">
                    <div>
                        {!loading && <p>There are no items created yet</p> }
                        { loading && <AppLoader></AppLoader>}
                    </div>
                </div>
            );
        }

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
