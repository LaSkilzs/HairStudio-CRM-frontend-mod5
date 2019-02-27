import React from "react";
import Profile from "../profile/Profile";
import "../css/login.css";
import LoginCard from "./LoginCard";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true
    };
  }

  loggedIn = username => {
    this.setState({ username });
  };

  loggedOut = () => {
    this.setState({ username: "" });
  };

  render() {
    return (
      <section id="Login">
        <LoginCard />
        <Profile />
      </section>
    );
  }
}
export default Login;
