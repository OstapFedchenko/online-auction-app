import React, {Component} from 'react';

import {Header, Content, Footer} from './components';

class App extends Component {

    render() {
        let isAuthenticated = false;
        return (
            isAuthenticated ?
            <div className="main-content">
                <Header/>
                <Content {...this.props}/>
                <Footer/>
            </div>
            : <div> {this.props.children}</div>
        );
    }
};

export default App;