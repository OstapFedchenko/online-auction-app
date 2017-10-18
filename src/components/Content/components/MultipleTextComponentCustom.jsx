import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const customMultipleText = ({
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
          <textarea rows="10" cols="8" className={classInput} {...input} type={type} id={input.name} placeholder="">
          </textarea>
           
            {touched && error && <span className="error">{error}</span> }
        </Col>
        <div className="clearfix"></div>
      </div>
    </Row>
  );

  export default customMultipleText;