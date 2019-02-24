import React from "react";
import "../css/navbar.css";

const LogNav = () => {
  return (
    <section id="Navbar">
      <div className="Navbar-container">
        <ul className="navbar-list">
          <li className="navbar-links logo">Welcome, username</li>
          <li className="navbar-links">Home</li>
          <li className="navbar-links">Profile</li>
          <li className="navbar-links">NewsFeed</li>
          <li className="navbar-links">Contact</li>
          <li className="navbar-links">Logout</li>
        </ul>
      </div>
    </section>
  );
};

export default LogNav;
