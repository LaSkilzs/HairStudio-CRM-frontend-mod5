import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import API from "../API.js";

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const user = this.state;
    API.login(user).then(data => {
      this.props.updateUser(data);
      if (user !== {}) {
        this.props.loggedIn(user.username);
        this.props.history.push("/profile");
      } else {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <section id="Login">
        <div className="login-card">
          <div id="wrapper">
            <div id="left">
              <div id="sigin">
                <div className="logo-pic">
                  <h2 className="login-head">Shear Elegance</h2>
                </div>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <div className="login-form">
                    <label>Enter username</label>
                    <input
                      type="text"
                      className="text-input"
                      name="username"
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div>
                    <label>Enter password</label>
                    <input
                      type="password"
                      className="text-input"
                      name="password"
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <button type="submit" className="primary-btn">
                    Sign In
                  </button>
                </form>
                <div className="links">
                  <Link to="/register">Forgot Password</Link>
                  {/* <a href="##">Sign in with Instagram or Facebook</a> */}
                </div>
                <div className="or">
                  <hr className="bar" />
                  <span>OR</span>
                  <hr className="bar" />
                </div>
                <Link to="/register">
                  <button className="secondary-btn">Create an account</button>
                </Link>
              </div>
              <footer id="main-footer">
                <p>
                  Copyright &copy; 2018, branManagement, All Rights Reserved
                </p>
                <div>
                  <a href="##">terms of user</a> |{" "}
                  <a href="##">Privacy Policy</a>
                </div>
              </footer>
            </div>
            <div id="right">
              <div id="showcase">
                <div className="showcase-content">
                  <h1 className="showcase-text">Come hang with us @ShopTalk</h1>
                  <Link to="/newsfeed">
                    <button className="secondary-butn">
                      Start today it's Free!!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default LoginCard;
