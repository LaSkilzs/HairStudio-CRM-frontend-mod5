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
  render() {
    return (
      <section id="Login">
        <div className="login-container">
          {this.state.loggedIn ? <Profile /> : <LoginCard />}
        </div>
      </section>
    );
  }
}
export default Login;
