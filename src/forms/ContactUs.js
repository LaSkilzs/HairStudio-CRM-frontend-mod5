import React from "react";
import "./forms.css";
import Navbar from "../app/Navbar";
import Header from "../app/Header";

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
      <div>
        <Navbar />
        <Header />
        <div className="form-container">
          <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Contact Form</h1>
              <hr/>
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
            <button
              type="submit"
              className="primary-btn"
              style={{
                color: "var(--pink)",
                border: "2px solid purple",
                fontSize: "20px"
              }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
