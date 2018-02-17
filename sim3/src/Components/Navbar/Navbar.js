import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='navContainer'>
                <div className='appName'>Helo</div>
                <div className='homeButton'>home</div>
                <div className='searchButton'>search</div>
                <div>{this.props.page}</div>
                <div className='logoutButton'>Logout</div>
            </div>
        );
    }
}

export default Navbar;