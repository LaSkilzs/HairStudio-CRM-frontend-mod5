import React from "react";
import "../css/navbar.css";

const Navbar = () => {
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
            <i className="fas fa-user" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
