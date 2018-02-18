import React, { Component } from 'react';
import './EditUserCard.css'
class EditUserCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <div className='userImg'> :] </div>
                <div className='cardRight'>
                <div className='userFirstName'>Name1</div>
                <div className='userLastName'>Name2</div>
                <div className='editProfileButton'>Edit Profile</div>
                </div>
            </div>
        );
    }
}

export default EditUserCard;