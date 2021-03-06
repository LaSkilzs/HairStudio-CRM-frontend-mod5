import React from "react";
import "../css/contact.css";
import API from "../API";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      salon_id: 1
    };
  }
  onSubmit = e => {
    e.preventDefault();
    const message = this.state;
    API.sendMessage(message);
    this.handleClick();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { salon } = this.props;
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
                <div className="contact-directions">
                  <h3>Find us here</h3>
                  <p>Address: {salon.street_1} </p>
                  <p>City: {salon.city}</p>
                  <p>State: {salon.state}</p>
                </div>
                <div>
                  <iframe
                    title="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.3785298380644!2d-74.4255563!3d40.6215334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3ba1ef8726995%3A0xd42f0672266ec14b!2s43+Chatham+St%2C+North+Plainfield%2C+NJ+07060!5e0!3m2!1sen!2sus!4v1550977919147"
                    style={{
                      width: "580px",
                      height: "500px",
                      frameborder: "0",
                      border: "2px solid var(--brown)",
                      marginLeft: "10px"
                    }}
                  />
                </div>
              </div>
            </article>
          ))}

          <article className="contact">
            <div className="contact-detail">
              <div className="contact-icon">
                <i className="fas fa-phone" />
              </div>
              <div className="contact-office">
                <p>Name: Shear Elegance </p>
                <p>Phone: 908-978-8765 </p>
                <ul className="contact-list">
                  Hours:
                  <li>Tue-Wed: 10am-6pm </li>
                  <li>Thu-Fri: 10am-8pm </li>
                  <li>Thu-Fri: 7am-6pm </li>
                  <li>All other times by appointment </li>
                </ul>
              </div>
              <form onSubmit={e => this.onSubmit(e)} className="contact-form">
                <input
                  type="text"
                  placeholder="first_name"
                  className="select"
                  name="name"
                  onChange={e => this.handleChange(e)}
                />
                <input
                  type="text"
                  placeholder="last_name"
                  className="select"
                  name="name"
                  onChange={e => this.handleChange(e)}
                />
                <input
                  type="phone"
                  placeholder="phone"
                  className="select"
                  name="phone"
                  onChange={e => this.handleChange(e)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  className="select"
                  onChange={e => this.handleChange(e)}
                  style={{ color: "var(--brown)" }}
                />
                <textarea
                  name="message"
                  id="contact-comments"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                  onChange={e => this.handleChange(e)}
                />
                <button type="submit" className="contact-but">
                  send message
                </button>
              </form>
            </div>
          </article>
        </div>
      </section>
    );
  }
}

export default Contact;
