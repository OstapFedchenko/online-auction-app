import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';

import {Header, Content, Footer} from './components';

class App extends Component {

    render() {
        return (
            <Grid fluid>
                <Header/>
                <Content {...this.props}/>
                <Footer/>
            </Grid>
        );
    }
};

export default App;