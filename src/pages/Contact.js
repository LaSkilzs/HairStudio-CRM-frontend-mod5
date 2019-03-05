import React from "react";
import "../css/contact.css";

const Contact = ({ salon }) => {
  return (
    <section id="Contact">
      <div className="title">
        <h3>Contact Us</h3>
      </div>
      <div className="contact-center">
        {salon.map((salon, index) => (
          <article className="contact-info" key={index}>
            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-home" />
              </div>
              <h3>Find us here</h3>
              <p>Address: {salon.street_1} </p>
              <p>City: {salon.city}</p>
              <p>State: {salon.state}</p>
              <iframe
                title="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.3785298380644!2d-74.4255563!3d40.6215334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ba1ef8726995%3A0xd42f0672266ec14b!2s43+Chatham+St%2C+North+Plainfield%2C+NJ+07060!5e0!3m2!1sen!2sus!4v1550977919147"
                style={{
                  width: "500px",
                  height: "500px",
                  frameborder: "0",
                  border: "0"
                }}
              />
            </div>
          </article>
        ))}

        <article className="contact">
          <div className="contact-detail">
            <div className="contact-icon">
              <i className="fas fa-phone" />
            </div>
            <p>Name: Shear Elegance </p>
            <p>Phone: 908-978-8765 </p>
            <ul className="contact-list">
              Hours:
              <li>Tue-Wed: 10am-6pm </li>
              <li>Thu-Fri: 10am-8pm </li>
              <li>Thu-Fri: 7am-6pm </li>
              <li>All other times by appointment </li>
            </ul>
            <form className="contact-form">
              <input type="text" id="first_name" placeholder="first_name" />
              <input type="text" id="last_name" placeholder="last_name" />
              <input
                type="email"
                id="email-contact"
                placeholder="email address"
                style={{ color: "var(--brown)" }}
              />
              <textarea name="" id="contact-comments" cols="30" rows="10" />
              <button type="submit" className="contact-but">
                send message
              </button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
