/*import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Modal, ModalBody, ModalHeader, ModalFooter, Glyphicon} from 'react-bootstrap';

class CategoryForm extends Component {

    constructor(props) {
        super(props)

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

        this.state = {
            showModal: false
        }
    }

    close() {
        this.setState({showModal: false})
    }

    open() {
        this.setState({showModal: true})
    }

    render() {
        const {onSubmitHandler} = this.props;

        return (
            <div className="static-modal">

                <Glyphicon onClick={this.open} glyph="plus"/>
                <Modal.Dialog show={this.state.showModal} onHide={this.close}>
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


export default reduxForm({
    form: 'categoryFrom'
})(CategoryForm);
*/