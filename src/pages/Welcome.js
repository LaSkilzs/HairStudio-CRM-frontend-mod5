import React from "react";
import "../css/welcome.css";

const Welcome = () => {
  return (
    <section id="Welcome">
      <div className="welcome-container">
        <h1 className="welcome-text">Shear Elegance</h1>
        <div className="welcome-button">
          <button className="wbtn">Book Today</button>
          <button className="wbtn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
