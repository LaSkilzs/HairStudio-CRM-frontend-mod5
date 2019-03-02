import React from "react";
import { Link, Route } from "react-router-dom";
import "../css/login.css";
// import API from "../API.js";
import Profile from "../profile/Profile";
import LoginCard from "../app/LoginCard";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  render() {
    if (this.state.user !== {}) {
      return (
        <Route
          path="/profile"
          component={routerProps => (
            <Profile
              user={this.state.user}
              username={this.state.username}
              {...routerProps}
            />
          )}
        />
      );
    } else {
      return <LoginCard username={this.state.username} />;
    }
  }
}
export default Login;
