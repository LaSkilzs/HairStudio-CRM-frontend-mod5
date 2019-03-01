import React from "react";
import "./forms.css";

class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const message = this.state;
    console.log(message);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="form-container">
        <h1>Contact Form</h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="text"
            className="select"
            placecholder="name"
            name="name"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="email"
            className="select"
            placeholder="email"
            name="email"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="phone"
            className="select"
            placeholder="phone"
            name="phone"
            onChange={e => this.handleChange(e)}
          />
          <textarea
            name="message"
            placeholder="message"
            className="select"
            cols="20"
            rows="10"
            onChange={e => this.handleChange(e)}
          />
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
