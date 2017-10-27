import React, {Component} from 'react';

import {Header, Content, Footer} from './components';

class App extends Component {

    render() {
        return (
            <div className="main-content">
                <Header/>
                <Content {...this.props}/>
                <Footer/>
            </div>
        );
    }
};

export default App;