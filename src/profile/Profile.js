import React from "react";
import "./profile.css";
import { Switch, Route } from "react-router-dom";
import Appointment from "../appointment/Appointment";
import NewsFeed from "../newsfeed/NewsFeed";
import Calendar from "../calendar/Calendar";
import Dashboard from "../dashboard/Dashboard";
import GalleryContainer from "../gallery/GalleryContainer";
import LoginCard from "../app/LoginCard";

class Profile extends React.Component {
  render() {
    return (
      <section id="Profile">
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/login" component={LoginCard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/newsfeed" component={NewsFeed} />
          <Route path="/gallery" component={GalleryContainer} />
          <Route path="/appointment" component={Appointment} />
        </Switch>
      </section>
    );
  }
}

export default Profile;
