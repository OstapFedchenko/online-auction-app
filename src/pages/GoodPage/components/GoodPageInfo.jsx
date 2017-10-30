import React, {Component} from 'react';
import {RaisedButton, Paper, FontIcon} from 'material-ui';

import {EditGoodForm } from '../../../components/Content';
import tempImg from '../../../temporarry/img/thumbnail.png';

import './GoodPageInfo.css';

const iconStyles = {
  fontSize: 27,
  cursor: 'pointer'
};

const tagStyles = Object.assign({}, iconStyles,{color:'#ED1C24'});
const buttonStyle = {
    backgroundColor: '#ED1C24'
};
const buttonTextColor = {
    color:'#fff'
};
const buttonRootStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    width: '80%'
};

const descriptionIcon = {
    fontSize: '16px',
    marginRight: '5px'
};

class GoodPageInfo extends Component{

    render(){

        const {good, categories, onSubmitGoodHandler, onDeleteGoodHandler} = this.props;

        const editFormProps = {
            initialValues: good,
            onSubmitHandler: onSubmitGoodHandler,
            categories
        };

        return(
            <div className="good-details">
                <section className="header-content">
                    <h3>{good.name}</h3>
                    <div className="social-info">
                        <div className="raiting">
                            <FontIcon className="material-icons" style={tagStyles}>star</FontIcon>
                            <FontIcon className="material-icons" style={tagStyles}>star</FontIcon>
                            <FontIcon className="material-icons" style={tagStyles}>star</FontIcon>
                            <FontIcon className="material-icons" style={tagStyles}>star</FontIcon>
                            <FontIcon className="material-icons" style={tagStyles}>star_half</FontIcon>
                        </div>
                        <div className="comments-count">
                            2 comments
                        </div>
                        <div className="tags">
                            <span className="tag green">New</span>
                            <span className="tag">Pc</span>
                            <span className="tag yellow">Extra Pay</span>
                        </div>
                        <div className="author-info">
                           author: {good.senderName}
                        </div>
                    </div>
                </section>
                
                <Paper className="good-img">
                    <img className="img" src={tempImg} alt="good img"/>
                </Paper>
                
                <Paper className="good-info">
                    
                    <div className="line-block-info">
                        <div>
                            <span className="value">325.21</span>
                            <FontIcon className="material-icons" style={iconStyles}>attach_money</FontIcon>
                        </div>
                        <RaisedButton label="By Now" style={buttonRootStyle} buttonStyle={buttonStyle} labelStyle={buttonTextColor}/>
                    </div>

                    <div className="line-block-info">
                        <div>
                            <span className="value">192.21</span>
                            <FontIcon className="material-icons" style={iconStyles}>account_balance</FontIcon>
                        </div>
                        <RaisedButton label="Up" style={buttonRootStyle} buttonStyle={buttonStyle} labelStyle={buttonTextColor}/>
                    </div>

                    <div className="line-block-info">
                        <FontIcon className="material-icons" style={iconStyles}>schedule</FontIcon>
                        <span className="value">22:12</span>
                    </div>

                    { !!good && <EditGoodForm {...editFormProps} /> }
                    
                    <FontIcon className="material-icons" style={iconStyles} onClick={onDeleteGoodHandler}>delete</FontIcon>
                </Paper> 

                <div className="description">
                    <div className="sepparator">
                        <FontIcon className="material-icons" style={descriptionIcon}>border_color</FontIcon>
                        Description
                    </div>
                    {good.body}
                </div>   
            </div>
        );
    }
}

export default GoodPageInfo;