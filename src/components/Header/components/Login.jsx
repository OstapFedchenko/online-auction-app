import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';

class Login extends Component{

    render(){

        return (
            <RaisedButton label="Log In" primary={true} disabled={true}/>
        );
    }
}

export default Login;