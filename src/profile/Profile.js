import React from "react";
// import "./profile.css";
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
import Navbar from "../app/Navbar";
import Header from "../app/Header";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!this.props.username) {
      console.log(this.props);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <React.Fragment>
        <section id="Profile">
          <Switch>
            <Route path="/profile" component={Calendar} />
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
      </React.Fragment>
    );
  }
}

export default Profile;
