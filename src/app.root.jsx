import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'react-bootstrap';

class App extends Component {

    render() {
        return (
            <div className="layout">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>&lt;{'Col xs={12} md={8}'}
                                /&gt;</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>&lt;{'Col xs={6} md={4}'}
                                /&gt;</code>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
};

/* const mapStateToProps = ({ goods }) => ({
	goods
});

const mapDispatchToProps = dispatch => {
	return {
		storeActions: bindActionCreators({
			fetchEmployees,
			fetchDepartments
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App); */

export default App;