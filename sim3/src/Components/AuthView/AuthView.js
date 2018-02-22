import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./AuthView.css"
import logo from'../../imgs/logo.png'

class AuthView extends Component {
    render() {
        return (
            <div className='authpage'>
                <div className='loginbox'>
                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='appname'>Helo</div>
                   <Link to='/'> <div className='loginButton' onClick={(e)=>alert('GET THIS TO AXIOS CALL FOR AUTH0')}>Login / Register</div></Link>
                </div>
            </div>
        );
    }
}

export default AuthView;