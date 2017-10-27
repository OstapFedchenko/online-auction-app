import React, {Component} from 'react';
import {Dialog, FlatButton, RaisedButton} from 'material-ui';
import {Field, reduxForm} from 'redux-form';

import {categoriesApi} from '../../../api';
import {categoryValidation} from '../../ValidationRules';
import {renderTextField} from '../../CustomComponents';

const checkCategoryNameHandler = categoriesApi.checkCategoryName;

class CategoryForm extends Component {

    constructor(props) {
        super(props)

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

        this.state = {
            showModal: false,
            name: ''
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        const {onSubmitHandler, handleSubmit} = this.props;

        const saveCategoryHandler = (category) => {
            this.close();
            onSubmitHandler(category);
        };

        const actions = [ 
                <FlatButton label = "Cancel" primary = {true} onClick = {this.close} />,
                <FlatButton label = "Submit" type="submit" primary = {true} onClick={handleSubmit(saveCategoryHandler)} />
        ];

        return (
            <div className="category-modal">
                <RaisedButton label="Add Category" onClick={this.open} primary={true}/>
                <Dialog
                    title="Create a new category"
                    actions={actions}
                    modal={true}
                    open={this.state.showModal}>
                    <form className="category-form" onSubmit={handleSubmit(saveCategoryHandler)}>
                        <Field fullWidth={true} name="name" component={renderTextField} label="Title"/>
                    </form>
                </Dialog>
            </div>
        );
    }
}

CategoryForm = reduxForm({
    form: 'category', validate: categoryValidation
    /* asyncValidate: checkCategoryNameHandler,
    asyncBlurFields: ['name']*/
})(CategoryForm);

export default CategoryForm;