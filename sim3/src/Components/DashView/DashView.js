import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import EditUserCard from "../EditUserCard/EditUserCard";
import FriendCard from "../FriendCard/FriendCard";

class DashView extends Component {
  render() {
      let reccomendedFriends = this.props.reccomendedFriendsList.map((friend,i)=>{
          return <FriendCard 
          userImg={this.props.userImg}
          userFirstName={this.props.userFirstName}
          userLastName={this.props.userLastName}
          />
      })
    return (
      <div>
        <Navbar page="Dashboard" />
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
                            <option value="firstName"></option>
                            <option value="lastName"></option>
                            <option value="gender"></option>
                            <option value="hobby"></option>
                            <option value="hairColor"></option>
                            <option value="eyeColor"></option>
                            <option value="birthday"></option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default DashView;
