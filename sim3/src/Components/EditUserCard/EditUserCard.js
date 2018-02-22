import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './EditUserCard.css'
class EditUserCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <div className='userImg'> <img src="https://robohash.org/me" alt=""/> </div>
                <div className='cardRight'>
                <div className='userFirstName'>Name1</div>
                <div className='userLastName'>Name2</div>
                <Link to='/profile' ><div className='editProfileButton'>Edit Profile</div></Link>
                </div>
            </div>
        );
    }
}

export default EditUserCard;