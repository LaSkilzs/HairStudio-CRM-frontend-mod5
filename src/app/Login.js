import React from "react";
import LoginCard from "./LoginCard";
import Profile from "../profile/Profile";
import Appointment from "../appointment/Appointment";
import NewsFeed from "../newsfeed/NewsFeed";
import Calendar from "../calendar/Calendar";

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login has Come to break up the Party!!</h2>
        <LoginCard />
        <Profile />
        <Appointment />
        <Calendar />
        <NewsFeed />
      </div>
    );
  }
}
export default Login;
