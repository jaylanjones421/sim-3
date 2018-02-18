import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div className='navContainer'>
                <div className='leftNav'>
                <div className='appName'>Helo</div>
                <div className='homeButton'>home</div>
                <div className='searchButton'>search</div>
                </div>
                <div className='pageName'>{this.props.page}</div>
                <div className='logoutButton'>Logout</div>
            </div>
        );
    }
}

export default Navbar;