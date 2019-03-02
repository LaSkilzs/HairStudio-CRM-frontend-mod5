import React from "react";
import Navbar from "../app/Navbar";

class CreateAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      time: "",
      duration: "",
      hairstyle: "",
      status: "",
      stylist_id: 0
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const appointment = this.state;
    console.log(appointment);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="form-container">
          <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Create Appointment</h1>
              <hr/>
            <input
              type="date"
              className="select"
              placeholder="date"
              name="date"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="time"
              className="select"
              placeholder="time"
              name="time"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="hairstyle"
              name="hairstyle"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="duration"
              name="duration"
              onChange={e => this.handleChange(e)}
            />
            <select
              name="status"
              id="appointment-status"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="pending">pending</option>
              <option value="confirmed">confirmed</option>
              <option value="cancelled">cancelled</option>
              <option value="completed">completed</option>
            </select>
            <select
              name="stylist_id"
              id="stylist"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="1">Name1</option>
              <option value="2">Name2</option>
            </select>
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
      </React.Fragment>
    );
  }
}

export default CreateAppointment;
