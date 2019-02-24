import React from "react";
import ProfileContainer from "./ProfileContainer";
import Dashboard from "../dashboard/Dashboard";
import GalleryContainer from "../gallery/GalleryContainer";
import "./profile.css";

class Profile extends React.Component {
  render() {
    return (
      <section id="Profile">
        <ProfileContainer />
        <Dashboard />
        <GalleryContainer />
      </section>
    );
  }
}

export default Profile;
