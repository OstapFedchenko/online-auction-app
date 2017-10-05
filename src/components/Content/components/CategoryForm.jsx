import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Modal, ModalBody, ModalHeader, ModalFooter, Glyphicon} from 'react-bootstrap';

class CategoryForm extends Comment {

    showModal() {
        $(this.refs.modal.getDOMNode()).modal();
    }

    render() {
        const {isShow, onSubmitHandler} = this.props;

        return (
            <div className="static-modal">
                
                <Glyphicon glyph="plus"/>
                <Modal.Dialog show={isShow}>
                    <Modal.Header>
                        <Modal.Title>Create a new category</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={onSubmitHandler}>
                            <div>
                                <label htmlFor="categoryName">Name</label>
                                <Field name="categoryName" component="input" type="text"/>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={onClose}>Close</Button>
                        <Button bsStyle="primary">Save</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}

CategoryForm = reduxForm({form: 'category'})(CategoryForm);

export default CategoryForm;