import React from "react";
import "../css/contact.css";

const Contact = ({ salon }) => {
  console.log(salon);

  return (
    <section id="Contact">
      <div className="title">
        <h3>Directions</h3>
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
            </div>
            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-phone" />
              </div>
              <p>Name: {salon.name}</p>
              <p>Phone: {salon.phone}</p>
              <p>Hours:</p>
            </div>
          </article>
        ))}

        <article className="contact-iframe">
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
        </article>
      </div>
    </section>
  );
};

export default Contact;
