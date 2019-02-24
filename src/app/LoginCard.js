import React from "react";

const LoginCard = () => {
  return (
    <div className="login-card">
      <div id="wrapper">
        <div id="left">
          <div id="sigin">
            <div className="logo-pic">
              <img src={require("../images/logo.png")} alt="Shear Elegance" />
            </div>
            <form>
              <div>
                <label>Email or username</label>
                <input type="text" className="text-input" />
              </div>
              <div>
                <label>Enter password</label>
                <input type="password" className="text-input" />
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
};

export default LoginCard;
