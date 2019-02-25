import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = props => {
  if (props.word) {
    return (
      <section id="Navbar">
        <div className="Navbar-container">
          <ul className="navbar-list">
            <li className="navbar-links logo">Welcome, username</li>
            <li className="navbar-links">
              <Link to="/login">Welcome</Link>
            </li>
            <li className="navbar-links">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar-links">
              <Link to="/calendar">Calendar</Link>
            </li>
            <li className="navbar-links">
              <Link to="/appointment">Appointment</Link>
            </li>
            <li className="navbar-links">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="navbar-links">
              <Link to="/newsfeed">NewsFeed</Link>
            </li>
            <li className="navbar-links">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="navbar-links">
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  } else {
    return (
      <section id="Navbar">
        <div className="Navbar-container">
          <ul className="navbar-list">
            <li className="navbar-links logo">Shear Elegance</li>
            <li className="navbar-links">Home</li>
            <li className="navbar-links">Gallery</li>
            <li className="navbar-links">Services</li>
            <li className="navbar-links">About</li>
            <li className="navbar-links">Contact</li>
            <li className="navbar-links">
              <Link to="/login">
                <i className="fas fa-user" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
};

export default Navbar;
