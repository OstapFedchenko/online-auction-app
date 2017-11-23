import React, {Component} from 'react';
import { Link } from 'react-router';

import './PublicHeader.css';

class PublicHeader extends Component {

    render() {

        return (
            <header className="public-header">
                <div className="left-section"></div>
                <div className="right-section">
                    <span><Link to={"/login"}>Log In</Link></span>
                    <span><Link to={"/signup"}>Sign Up</Link></span>
                </div>
            </header>
        );
    }
}

export default PublicHeader;