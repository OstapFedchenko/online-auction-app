import React from 'react';
import { reduxForm } from 'redux-form';
import {Row, Col} from 'react-bootstrap';

const customSelect = ({
    input,
    label,
    items,
    meta: { touched, error, warning }    
  }) => (
     
    <Row>
      <div className="form-group">
        
        <label className="control-label col-xs-3" htmlFor={input.name}>{label}</label>
        <Col xs={9}>
            <select {...input} className="form-control" id={input.name}>
                {
                    items.map((item)=>
                        <option
                            key={item.id}
                            value={item.id}>
                            {item.name}
                         </option>
                    )
                }
            </select>
            {touched && error && <span className="error">{error}</span> }
        </Col>
        <div className="clearfix"></div>
      </div>
    </Row>
  );

  export default customSelect;