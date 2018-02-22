import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import home from '../../imgs/home.png'
import search from '../../imgs/search.png'

class Navbar extends Component {
    render() {
        return (
            <div className='navContainer'>
                <div className='leftNav'>
                <div className='appName'>Helo</div>
               <Link to='/' > <div className='homeButton'><img src={home} alt=""/></div></Link>
               <Link to='/search' style={{ textDecoration: 'none'}}>  <div className='navSearchButton'><img src={search} alt=""/></div></Link>
                </div>
                <div className='pageName'>{this.props.page}</div>
               <Link to='/auth' > <div className='logoutButton'>Logout</div></Link>
            </div>
        );
    }
}

export default Navbar;