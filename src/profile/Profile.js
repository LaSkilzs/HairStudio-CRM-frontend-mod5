import React from "react";
import "./profile.css";
import { Switch, Route } from "react-router-dom";
import Appointment from "../appointment/Appointment";
import NewsFeed from "../newsfeed/NewsFeed";
import Calendar from "../calendar/Calendar";
import Dashboard from "../dashboard/Dashboard";
import GalleryContainer from "../gallery/GalleryContainer";
import ContactUs from "../forms/ContactUs";
import CreateAppointment from "../forms/CreateAppointment";
import CreateHairCard from "../forms/CreateHairCard";
import CreateProfile from "../forms/CreateProfile";
import LoginCard from "../app/LoginCard";

class Profile extends React.Component {
  async componentDidMount() {
    const response_us = await fetch("http://localhost:3000/api/v1/users");
    const response_ap = await fetch(
      "http://localhost:3000/api/v1/appointments"
    );
    const user = await response_us.json();
    const appointments = await response_ap.json();
    console.log(user);
    console.log(appointments);
  }
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
          <Route path="/haircard" component={CreateHairCard} />
          <Route path="/createprofile" component={CreateProfile} />
          <Route path="/createappointment" component={CreateAppointment} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
        <div />
      </section>
    );
  }
}

export default Profile;
