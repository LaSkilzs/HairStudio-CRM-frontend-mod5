import React from "react";
import LoginCard from "./LoginCard";
import Profile from "../profile/Profile";
import Appointment from "../appointment/Appointment";
import NewsFeed from "../newsfeed/NewsFeed";
import Calendar from "../calendar/Calendar";
import Dashboard from "../dashboard/Dashboard";
import GalleryContainer from "../gallery/GalleryContainer";
import { Switch, Route } from "react-router-dom";
import "../css/login.css";

class Login extends React.Component {
  render() {
    return (
      <section id="Login">
        <div className="login-container">
          <Switch>
            <Route path="/login" component={LoginCard} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/newsfeed" component={NewsFeed} />
            <Route path="/gallery" component={GalleryContainer} />
            <Route path="/appointment" component={Appointment} />
          </Switch>
        </div>
      </section>
    );
  }
}
export default Login;
