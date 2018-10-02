
import React, { Component } from 'react';
import Auth from '../Auth/Auth';

const auth = new Auth();

class SplashPage extends Component {

    login = () => {
        auth.login();
    }

    render() {
        return (
            <div className="splash-app">

                <button onClick={this.login} >Get Started</button>
            </div>
        );
    }
}

export default SplashPage;
