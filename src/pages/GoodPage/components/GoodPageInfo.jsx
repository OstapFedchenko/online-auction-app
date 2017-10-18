import React, {Component} from 'react';
import {Thumbnail, Col, Button} from 'react-bootstrap';
import {EditGoodForm } from '../../../components/Content';

class GoodPageInfo extends Component{

    render(){

        const {good, categories, goodId, onSubmitGoodHandler, onDeleteGoodHandler} = this.props;

        const editFormProps = {
            initialValues: good,
            onSubmitHandler: onSubmitGoodHandler,
            categories
        };

        return(
            <Col xs={4} md={4} className="good">
                <Thumbnail src={good.img} alt="242x200">
                    <h3>{good.name}</h3>
                    <p className="content">{good.body}</p>
                    <p className="author">{good.senderName}</p>
                    { !!good && <EditGoodForm {...editFormProps} /> }
                    <p>
                        
                        <Button bsStyle="danger" onClick={onDeleteGoodHandler} className="view-button">Delete</Button>
                    </p>
                </Thumbnail>
            </Col>

        );
    }
}

export default GoodPageInfo;