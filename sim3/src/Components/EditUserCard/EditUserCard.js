import React, { Component } from 'react';

class EditUserCard extends Component {
    render() {
        return (
            <div className='cardContainer'>
                <div className='userImg'> :0 </div>
                <div className='userFirstName'>name1</div>
                <div className='userlastName'>name2</div>
                <div className='editProfileButton'>Edit Profile</div>
            </div>
        );
    }
}

export default EditUserCard;