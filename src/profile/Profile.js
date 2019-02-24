import React from "react";
import ProfileContainer from "./ProfileContainer";
import Dashboard from "../dashboard/Dashboard";

class Profile extends React.Component {
  render() {
    return (
      <section id="profile">
        <h2>Profile Here!</h2>
        <ProfileContainer />
        <Dashboard />
      </section>
    );
  }
}

export default Profile;
