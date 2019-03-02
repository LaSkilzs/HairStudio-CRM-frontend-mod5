import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = props => {
  // const { username, loggedOut } = this.props;
  if (props.username) {
    return (
      <section id="Navbar">
        <div className="calendar-container">
          <section id="side-menu">
            <ul className="side-nav">
              <li className="active">
                <Link to="/profile">
                  <i className="fas fa-home" aria-hidden="true" /> Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i className="fas fa-tachometer-alt" aria-hidden="true" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/newsfeed">
                  <i className="fas fa-newspaper" aria-hidden="true" /> NewsFeed
                </Link>
              </li>
              <li>
                <Link to="/appointment">
                  <i className="fas fa-calendar-check" aria-hidden="true" />
                  Appointment
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  <i className="fas fa-images" aria-hidden="true" /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contactus">
                  <i className="fas fa-images" aria-hidden="true" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/createprofile">
                  <i className="fas fa-images" aria-hidden="true" /> Create
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/createappointment">
                  <i className="fas fa-images" aria-hidden="true" /> Create
                  Appointment
                </Link>
              </li>
              <li>
                <Link to="/haircard">
                  <i className="fas fa-images" aria-hidden="true" /> Create
                  HairCard
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <i className="fas fa-user" aria-hidden="true" />
                  <button onClick={props.loggedOut}>Logout</button>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </section>
    );
  } else {
    return (
      <section id="Navbar">
        <div className="Navbar-container">
          <ul className="navbar-list">
            <li className="navbar-links logo">Shear Elegance</li>
            <Link to="/">
              <li className="navbar-links">Home</li>
            </Link>
            <Link to="/gallery">
              <li className="navbar-links">Gallery</li>
            </Link>
            <Link to="/services">
              <li className="navbar-links">Services</li>
            </Link>
            <Link to="/about">
              <li className="navbar-links">About</li>
            </Link>
            <Link to="/contact">
              <li className="navbar-links">Contact</li>
            </Link>
            <li className="navbar-links">
              <i className="fas fa-user" />
              <Link to="/login">
                <button className="nav-but">Login</button>
              </Link>
              <Link to="/">
                <button className="nav-but">Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
};

export default Navbar;
