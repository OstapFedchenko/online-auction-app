import React, {Component} from 'react';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import {goodValidation} from '../../ValidationRules';
import {customInput, customSelect, customMultipleText} from '../../CustomComponents';

import { PropTypes } from 'prop-types';

import { FORM_NAMES, FORM_MODES, GOOD_FORM_FIELDS, goodProp } from '../../../constants';
//import './goodForm.less';

class GoodForm extends Component {

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
        const { mode, categories, onSubmitHandler, handleSubmit } = this.props;
        const isEditMode = mode === FORM_MODES.EDIT;

        const saveGoodHandler = (good)=> {
            this.close();
            onSubmitHandler(good);
        };

        return (
            <div className="good-modal">

                <Button onClick={this.open} bsStyle="success" bsSize="small">{ isEditMode ? 'Edit' : 'Add' } Good</Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                <form className="good-form" onSubmit={ handleSubmit(saveGoodHandler) }>
                    <Modal.Header>
                        <Modal.Title>{ isEditMode ? 'Edit' : 'Add' } Good</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Field classInput="form-control" name={GOOD_FORM_FIELDS.NAME} type="text" component={customInput} label="Name" />
                        <Field classInput="form-control" name={GOOD_FORM_FIELDS.SENDER_NAME} type="text" component={customInput} label="Owner Name" />
                        <Field classInput="form-control" name={GOOD_FORM_FIELDS.SENDER_EMAIL} type="email" component={customInput} label="Owner Email" />
                        <Field classInput="form-control" name={GOOD_FORM_FIELDS.CATEGORY_ID} items={categories} component={customSelect} label="Category" />
                        <Field classInput="form-control" name={GOOD_FORM_FIELDS.BODY} type="text" component={customMultipleText} label="Description" />
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

GoodForm.propTypes = {
	mode: PropTypes.oneOf([FORM_MODES.CREATE, FORM_MODES.EDIT]),
	onSubmit: PropTypes.func,
	initialValues: goodProp
};

function goodFormFactory(formName, mode) {
	return reduxForm({
		form: formName,
		fields: [
            GOOD_FORM_FIELDS.Id, 
            GOOD_FORM_FIELDS.NAME,
            GOOD_FORM_FIELDS.BODY,
            GOOD_FORM_FIELDS.IMG,
            GOOD_FORM_FIELDS.SENDER_NAME,
            GOOD_FORM_FIELDS.SENDER_EMAIL,
            GOOD_FORM_FIELDS.CATEGORY_ID
        ],
        enableReinitialize: true,
        validate: goodValidation,
		initialValues: {
			[GOOD_FORM_FIELDS.ID]: '',
            [GOOD_FORM_FIELDS.NAME]: '',
            [GOOD_FORM_FIELDS.SENDER_NAME]: '',
            [GOOD_FORM_FIELDS.SENDER_EMAIL]: '',
            [GOOD_FORM_FIELDS.IMG]: 'img/thumbnail.png',
            [GOOD_FORM_FIELDS.BODY]: '',
            [GOOD_FORM_FIELDS.CATEGORY_ID]: ''
		}
	})(props => <GoodForm { ...props } mode={mode} />);
}

const CreateGoodForm = goodFormFactory(FORM_NAMES.CREATE_GOOD, FORM_MODES.CREATE);
const EditGoodForm = goodFormFactory(FORM_NAMES.EDIT_GOOD, FORM_MODES.EDIT);

export { CreateGoodForm, EditGoodForm };
