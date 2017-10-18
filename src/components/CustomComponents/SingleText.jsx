import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const customInput = ({
    input,
    label,
    type,
    classInput,
    meta: { touched, error, warning }    
  }) => (
    <Row>
      <div className="form-group">
        
        <label className="control-label col-xs-3" htmlFor={input.name}>{label}</label>
        <Col xs={9}>
          <input className={classInput} {...input} type={type} id={input.name} />
            {touched && error && <span className="error">{error}</span> }
        </Col>
        <div className="clearfix"></div>
      </div>
    </Row>
  );

  export default customInput;