import React from "react";
import LoginCard from "./LoginCard";
import Profile from "../profile/Profile";
import Appointment from "../appointment/Appointment";
import NewsFeed from "../newsfeed/NewsFeed";
import Calendar from "../calendar/Calendar";
import LogNav from "../app/LogNav";
import "../css/login.css";

class Login extends React.Component {
  render() {
    return (
      <section id="Login">
        <div className="login-container">
          <LoginCard />
          <LogNav />
          <Profile />
          <Appointment />
          <Calendar />
          <NewsFeed />
        </div>
      </section>
    );
  }
}
export default Login;
