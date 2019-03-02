import React from "react";
import { Link } from "react-router-dom";
import "../css/welcome.css";

const Welcome = () => {
  return (
    <section id="Welcome">
      <div className="welcome-container">
        <h1 className="welcome-text">Shear Elegance</h1>
        <div className="welcome-button">
          <Link to="/appointment">
            <button className="wbtn">Book Today</button>
          </Link>
          <Link to="/contact">
            <button className="wbtn">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
