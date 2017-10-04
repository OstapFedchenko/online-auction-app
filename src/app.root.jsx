import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import { bindActionCreators } from 'redux';

import { Header, Content, Footer } from './components';
import { fetchGoods } from './state';
import { goodsApi } from './api';

class App extends Component {
    componentDidMount() {
		//this.props.storeActions.fetchGoods().catch(() => {
		//	console.log('Goods didnt load');
        //});
        console.log('loading...')
        goodsApi.fetchGoods();
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

const mapStateToProps = ({ goods }) => ({
	goods
});

const mapDispatchToProps = dispatch => {
	return {
		storeActions: bindActionCreators({
			fetchGoods
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 