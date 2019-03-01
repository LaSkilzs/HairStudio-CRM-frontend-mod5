import React from "react";

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
      <div className="form-container">
        <h1>Create Appointment</h1>

        <form onSubmit={e => this.onSubmit(e)}>
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
          <button type="submit" className="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAppointment;
