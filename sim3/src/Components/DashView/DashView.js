import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import './DashView.css'
import EditUserCard from "../EditUserCard/EditUserCard";
import FriendCard from "../FriendCard/FriendCard";

class DashView extends Component {
  render() {
     let reccomendedFriends = function(){
          return(<p>No reccomendations</p>)
      }
    return (
      <div>
        <Navbar page="Dashboard" />
        <div className='dashTainer'>
        <div className="dashTop">
          <EditUserCard />
          <div className="aboutText">
            <p>
              Welcome to Helo! Find recommended friends based on your
              similarities, and even search for them by name. The more you
              update your profile, the better recommendations we can make!
            </p>
          </div>
        </div>
        <div className='dashBottom'>
            <div className='reccomendedFriendsTop'>
                <div className='containerTitle'>Recommended Friends</div>
                <div className='sortDiv'>
                    <div>Sorted By </div>
                    <div>
                        <select name="sortFriends" id="">
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="gender">Gender</option>
                            <option value="hobby">Hobby</option>
                            <option value="hairColor">Hair Color</option>
                            <option value="eyeColor">Eye Color</option>
                            <option value="birthday">Birthday</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='reccomendedFriendsBottom'>
            {reccomendedFriends()}
            </div>

        </div>
        </div>
      </div>
    );
  }
}

export default DashView;
