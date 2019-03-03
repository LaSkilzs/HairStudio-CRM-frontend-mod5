import React from "react";
import { Link } from "react-router-dom";
import "../css/about.css";

const About = () => {
  return (
    <section id="About">
      <div className="about-container">
        <h1>Professional Service</h1>
        <Link to="/contact">
          <button type="button">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default About;
