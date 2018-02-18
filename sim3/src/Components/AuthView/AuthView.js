import React, { Component } from 'react';
import "./AuthView.css"

class AuthView extends Component {
    render() {
        return (
            <div className='authpage'>
                <div className='loginbox'>
                    <div className='logo'>
                        ;]
                    </div>
                    <div className='appname'>Helo</div>
                    <div className='loginButton'>
                        <p>Login / Register</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthView;