import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Sidebar = props => {
  return (
    <section id="Navbar">
      <div className="calendar-container">
        <header>
          <div className="search-area">
            <i className="fas fa-search" />
            <input type="text" />
          </div>
          <div className="user-field">
            <a href="##" className="add">
              +add
            </a>
            <a href="##">
              <i className="fas fa-bell" aria-hidden="true" />
              <span className="span">3</span>
            </a>
            <a href="##">
              <div className="user">
                <img
                  src="https://randomuser.me/api/portraits/thumb/women/15.jpg"
                  alt="user"
                  className="user-img"
                />
              </div>
            </a>
            <a href="##">
              <i className="fas fa-caret-down" aria-hidden="true" />
            </a>
          </div>
        </header>
      </div>

      <div className="calendar-container">
        <section id="side-menu">
          <ul className="side-nav">
            <li className="active">
              <Link to="/calendar">
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
                <i className="fas fa-user" aria-hidden="true" /> Logout
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Sidebar;
