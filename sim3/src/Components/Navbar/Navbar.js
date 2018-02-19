import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='navContainer'>
                <div className='leftNav'>
                <div className='appName'>Helo</div>
               <Link to='/'> <div className='homeButton'>home</div></Link>
               <Link to='/search'>  <div className='navSearchButton'>search</div></Link>
                </div>
                <div className='pageName'>{this.props.page}</div>
                <div className='logoutButton'>Logout</div>
            </div>
        );
    }
}

export default Navbar;