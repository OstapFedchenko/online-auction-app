import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';

import {CategoryForm} from './';

import './CategoryList.less';

class CategoryList extends Component {

    render() {
        const {categories, onSubmitHandler} = this.props;
        
        return (
            <div className="category-wrapper">
                <ul className="category-list">
                    {
                        categories.map(category =>
                            <li className="category-item" key={category.id}>
                                {category.name}
                            </li>
                        )
                    }
                </ul>
                <CategoryForm onSubmitHandler={onSubmitHandler}/>
            </div>
        );
    }
}

export default CategoryList;