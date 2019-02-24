import React from "react";
import ProfileList from "./ProfileList";

class ProfileContainer extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <h2>Profile Container Here</h2>
        <ProfileList />
      </div>
    );
  }
}

export default ProfileContainer;
