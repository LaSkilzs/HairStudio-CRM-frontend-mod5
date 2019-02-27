import React from "react";
import API from "../API.js";
class LoginCard extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    console.log("clicked");
    e.preventDefault();
    const user = this.state;

    if (API.login(user) !== {}) {
      this.props.loggedIn(user.username);
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    return (
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
                <a href="##">Forgot Password</a>
                <a href="##">Sign in with Instagram or Facebook</a>
              </div>
              <div className="or">
                <hr className="bar" />
                <span>OR</span>
                <hr className="bar" />
              </div>
              <a href="##" className="secondary-btn">
                Create an account
              </a>
            </div>
            <footer id="main-footer">
              <p>Copyright &copy; 2018, branManagement, All Rights Reserved</p>
              <div>
                <a href="##">terms of user</a> | <a href="##">Privacy Policy</a>
              </div>
            </footer>
          </div>
          <div id="right">
            <div id="showcase">
              <div className="showcase-content">
                <h1 className="showcase-text">Come hang with us @ShopTalk</h1>
                <a href="##" className="secondary-butn">
                  Start today it's Free!!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginCard;
