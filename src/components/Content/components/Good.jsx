import React, {Component} from 'react';
import Image from 'material-ui-image';
import {RaisedButton, Paper} from 'material-ui';

import tempImg from '../../../temporarry/img/thumbnail.png'
import ('./Good.css');

class Good extends Component {

    render() {
        const {onClickHandler, goodId, name, author} = this.props;

        return (
            <Paper className="good-item">
                <Image src={tempImg}/>

                <h3>{name}</h3>
                <p className="good-content">{this.props.children}</p>
                <p className="good-author">author: {author}</p>
                        
                <RaisedButton label="View" primary={true} onClick={()=> onClickHandler(goodId)}/>
                        
            </Paper>
        );
    }
}

export default Good;