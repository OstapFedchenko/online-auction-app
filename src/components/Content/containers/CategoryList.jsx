import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { push } from 'react-router-redux';
import { Paper, List, Subheader, ListItem, Divider, Avatar } from 'material-ui';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500} from 'material-ui/styles/colors';

import {fetchCategories} from '../../../state';
import { CategoryForm, AppLoader } from '../../../components';
import {CATEGORY_ROUTE} from '../../../constants';
import { loading } from '../../../services';

import './CategoryList.css';

class CategoryList extends Component {

    componentDidMount() {
        const { fetchCategories } = this.props.storeActions;

        fetchCategories();
    }

    render() {
        const {categories, onSubmitCategory, onCategoryClick, loading} = this.props;

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
                <Paper>
                    <List>
                        <Subheader inset={true}>Categories</Subheader>
                        {
                            categories.map(category =>
                                <ListItem  
                                    className="category-item"
                                    key={category.id} 
                                    primaryText={category.name} 
                                    leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                                    onClick={()=> onCategoryClick(category.id)} />

                            )
                        }
                    
                    </List>
                    <Divider inset={true} />
                    <List>
                        <Subheader inset={true}>Actions</Subheader>
                        <ListItem
                            primaryText={<CategoryForm onSubmitHandler={onSubmitCategory}/>}
                        />
                    </List>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    loading: loading.isAnyCategoryActionLoading(state) || loading.isAnyFetchLoading(state)
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
