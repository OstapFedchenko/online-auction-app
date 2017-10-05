import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {Header, Content, Footer} from './components';
import {setGoods} from './state';
import {goodsApi} from './api';

class App extends Component {

    render() {
        return (
            <Grid fluid>
                <Header/>
                <Content/>
                <Footer/>
            </Grid>
        );
    }
};

export default App;