import React, {Component} from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    Glyphicon
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import {categoriesApi} from '../../../api';
import {categoryValidation} from '../../validation';
import {customInput} from '../../CustomComponents';

import './CategoryForm.less';

const checkCategoryNameHandler = categoriesApi.checkCategoryName;

class CategoryForm extends Component {

    constructor(props) {
        super(props)

        this.close = this
            .close
            .bind(this);
        this.open = this
            .open
            .bind(this);

        this.state = {
            showModal: false
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        const {onSubmitHandler, handleSubmit, error} = this.props;

        const saveCategoryHandler = (category)=> {
            this.close();
            onSubmitHandler(category);
        };

        return (
            <div className="category-modal">

                <Glyphicon onClick={this.open} glyph="plus"/>
                <Modal show={this.state.showModal} onHide={this.close}>
                <form className="category-form" onSubmit={ handleSubmit(saveCategoryHandler) }>
                    <Modal.Header>
                        <Modal.Title>Create a new category</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Field classInput="form-control" maxLength="30" autoComplete="off" name="name" type="text" component={customInput} label="Name" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button type="submit" bsStyle="primary">Save</Button>
                    </Modal.Footer>
                </form>
                </Modal>
            </div>
        );
    }
}

CategoryForm = reduxForm({
    form: 'category',
    validate: categoryValidation
   /* asyncValidate: checkCategoryNameHandler,
    asyncBlurFields: ['name']*/
  })(CategoryForm);

export default CategoryForm;