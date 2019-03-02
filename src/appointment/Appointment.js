import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navbar from "../app/Navbar";

class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      appointments: []
    };
  }

  async componentDidMount() {
    const response_ap = await fetch(
      "http://localhost:3000/api/v1/appointments"
    );
    const appointments = await response_ap.json();
    this.setState({
      appointments
    });
    this.appointment();
  }

  appointment = () => {
    const events = [...this.state.appointments].map(appointment => {
      return {
        title: appointment.name,
        start: appointment.date,
        end: appointment.date,
        time: appointment.set_time
      };
    });
    this.setState({ events });
  };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    let allViews = Object.keys(BigCalendar.Views).map(
      k => BigCalendar.Views[k]
    );
    return (
      <div className="appointment-container">
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          views={allViews}
          step={60}
          timeslots={16}
          events={this.state.events}
          style={{ height: "90vh", marginLeft: "250px", marginRight: "100px" }}
        />
      </div>
    );
  }
}

export default Appointment;
