import React from "react";

const LoginCard = () => {
  return (
    <div className="login-card">
      <div id="wrapper">
        <div id="left">
          <div id="signin">
            <div>
              <h2 className="logo">Shear Elegance</h2>
            </div>
            <form>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  name=""
                  className="text-input"
                  placeholder="username"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name=""
                  className="text-input"
                  placeholder="password"
                />
              </div>
              <button type="submit" class="primary-btn">
                Sign In
              </button>
            </form>
            <div>
              <a className="links" href="##">
                Forgot Password
              </a>
            </div>
            <div className="or">
              <hr className="bar" />
              <span>OR</span>
              <hr className="bar" />
            </div>
            <button className="secondary-btn">Create an account</button>
          </div>
          <footer id="main-footer">
            <p>Copyright &copy; 2018, BranManagement All Rights Reserved</p>
          </footer>
        </div>
        <div id="right">
          <div id="showcase">
            <h1 className="showcase-text">Book an Appointment Today</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
