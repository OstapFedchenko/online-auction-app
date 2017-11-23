import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';

class Logout extends Component{

    render(){

        return (
            <RaisedButton onClick={this.props.handler} label="Log Out" disabled={this.props.isDisable} primary={true} />
        );
    }
}

export default Logout;