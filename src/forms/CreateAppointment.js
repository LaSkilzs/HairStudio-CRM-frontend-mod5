import React from "react";
import API from "../API";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class CreateAppointment extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      start_time: "",
      duration: "",
      hairstyle: "",
      status: "pending",
      service_total: 0.0,
      stylist_id: 1,
      user_id: 40,
      selectedDate: undefined
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const appointment = this.state;
    // if (API.scheduleAppointment(appointment)) {
    //   alert("appointment created");
    // }
    console.log(appointment);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  };

  render() {
    return (
      <React.Fragment>
        <div className="form-container">
          {/* <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Create Appointment</h1>
            <hr />
              <div className="appointment-card">
                <DayPicker
                  onDayClick={this.handleDayClick}
                  selectedDays={this.state.selectedDay}
                  disabledDays={{ daysOfWeek: [0, 1] }}
                />
                {this.state.selectedDay ? (
                  <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                  <p> Please select a day.</p>
                )}
              </div>
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
          </form> */}
          <form onSubmit={e => this.onSubmit(e)} className="create">
            <h1 className="form-header">Book Appointment</h1>
            <hr />
            <div>
              <DayPicker
                onDayClick={this.handleDayClick}
                selectedDays={this.state.selectedDay}
                disabledDays={{ daysOfWeek: [0, 1] }}
              />
              {this.state.selectedDay ? (
                <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
              ) : (
                <p> Please select a day.</p>
              )}
            </div>
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
            <input
              type="text"
              className="select"
              placeholder="cost"
              name="service_total"
              onChange={e => this.handleChange(e)}
            />
            <input
              type="text"
              className="select"
              placeholder="user_id"
              name="user_id"
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
              name="service_type"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="1">Choose Service Type</option>
              <option value="1">Name1</option>
            </select>

            <select
              name="stylist_id"
              className="select"
              onChange={e => this.handleChange(e)}
            >
              <option value="1">Choose Stylist</option>
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
