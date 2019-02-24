import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <section id="Footer">
      <div className="footer-text">
        <h3>CopyRight &copy 2018; All Rights Reserved </h3>
      </div>
      <div className="footer-icons">
        <ul className="footer-list">
          <li className="footer-links">
            <i className="fab fa-instagram" />
          </li>
          <li className="footer-links">
            <i className="fab fa-facebook-f" />
          </li>
          <li className="footer-links">
            <i className="fab fa-youtube" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
