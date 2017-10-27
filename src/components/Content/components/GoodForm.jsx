import React, {Component} from 'react';
import {Dialog, FlatButton, RaisedButton, MenuItem, FontIcon} from 'material-ui';
import {Field, reduxForm} from 'redux-form';

import {goodValidation} from '../../ValidationRules';
import {renderTextField, renderSelectField} from '../../CustomComponents';
import {PropTypes} from 'prop-types';
import {FORM_NAMES, FORM_MODES, GOOD_FORM_FIELDS, goodProp} from '../../../constants';

const customContentStyle = {
    overflowY: 'none'
};

const iconStyles = {
  fontSize: 27,
  cursor: 'pointer'
};

class GoodForm extends Component {

    constructor(props) {
        super(props)

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

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
        const {mode, categories, onSubmitHandler, handleSubmit} = this.props;
        const isEditMode = mode === FORM_MODES.EDIT;

        const saveGoodHandler = (good) => {
            this.close();
            onSubmitHandler(good);
        };

        const actions = [ 
                <FlatButton label = "Cancel" primary = {true} onClick = {this.close} />,
                <FlatButton label = "Submit" type = "submit" primary = {true} onClick = {handleSubmit(saveGoodHandler)} />
        ];

        const title = `${isEditMode ? 'Edit' : 'Add'}  Good`;
        const actionControl = isEditMode ?
                                            <FontIcon className="material-icons" style={iconStyles} onClick={this.open}>mode_edit</FontIcon>
                                            :
                                            <RaisedButton className="add-good-btn" label={title} primary = {true} onClick={this.open}/>;
        return (
            <div className="good-modal">
                {actionControl}
                <Dialog
                    title={title}
                    actions={actions}
                    modal={true}
                    bodyStyle={customContentStyle}
                    open={this.state.showModal}>
                    <form className="good-form" onSubmit={handleSubmit(saveGoodHandler)}>
                        <Field fullWidth={true} name={GOOD_FORM_FIELDS.NAME} component={renderTextField} label="Title"/>
                        <Field fullWidth={true} name={GOOD_FORM_FIELDS.SENDER_NAME} component={renderTextField} label="Author Name"/>
                        <Field fullWidth={true} name={GOOD_FORM_FIELDS.SENDER_EMAIL} component={renderTextField} type="email" label="Author Email"/>
                        <Field fullWidth={true} name={GOOD_FORM_FIELDS.CATEGORY_ID} component={renderSelectField} label="Category">
                            {
                                categories.map(categoy=>{
                                  return <MenuItem key={categoy.id} value={categoy.id} primaryText={categoy.name}/>;
                                })
                            }
                        </Field>
                        <Field fullWidth={true} name={GOOD_FORM_FIELDS.BODY} component={renderTextField} multiLine={true} rows={5} label="Description"/>
                    </form>
                </Dialog>
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
            [GOOD_FORM_FIELDS.IMG]: '',
            [GOOD_FORM_FIELDS.BODY]: '',
            [GOOD_FORM_FIELDS.CATEGORY_ID]: ''
        }
    })(props => <GoodForm { ...props } mode={mode}/>);
}

const CreateGoodForm = goodFormFactory(FORM_NAMES.CREATE_GOOD, FORM_MODES.CREATE);
const EditGoodForm = goodFormFactory(FORM_NAMES.EDIT_GOOD, FORM_MODES.EDIT);

export {CreateGoodForm, EditGoodForm};
