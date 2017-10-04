import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {Header, Content, Footer} from './components';
import {setGoods} from './state';
import {goodsApi} from './api';

class App extends Component {
    componentDidMount() {
        const {setGoods} = this.props.storeActions;

        console.log('loading...')
        goodsApi
            .fetchGoods()
            .then(data => {
                setGoods(data);
            });
    }

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

const mapStateToProps = ({goods}) => ({
    goods
});

const mapDispatchToProps = dispatch => {
    return {
        storeActions: bindActionCreators({
            setGoods
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);