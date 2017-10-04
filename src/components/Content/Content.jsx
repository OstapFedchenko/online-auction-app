import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import { GridGoods } from './';

class Content extends Component {

    render() {
        const {goods} = this.props;

        if (!Array.isArray(goods) || !goods.length) {
            return (<div>
                       No data yet
                    </div>
                    );
        }

        return (
            <div className="content">
                <Row>
                    <Col xsPull={1} xsPush={1} xs={10}>Category component</Col>
                </Row>
                    <GridGoods goods={goods}/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
	goods: state.goods
});

export default connect(mapStateToProps)(Content);