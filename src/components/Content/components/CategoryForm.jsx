import React, {Component} from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    Glyphicon
} from 'react-bootstrap';
import {Control, Form, actions} from 'react-redux-form';

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
        const {onSubmitHandler} = this.props;

        return (
            <div className="static-modal">

                <Glyphicon onClick={this.open} glyph="plus"/>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>Create a new category</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form model="form.category" onSubmit={(category) => onSubmitHandler(category)}>
                            <label htmlFor=".name">Category name:</label>
                            <Control.text model=".name" id="category.id"/>

                            <button type="submit">
                                Finish!
                            </button>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button type="submit" bsStyle="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CategoryForm;