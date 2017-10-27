import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component{

    render(){

        return (
            <footer className="footer">
                <div className="footer-left">Left Footer component</div>
                <div className="footer-middle">Middle Footer component</div>
                <div className="footer-right">Right Footer commonent</div>
            </footer>
        );
    }
}

export default Footer;