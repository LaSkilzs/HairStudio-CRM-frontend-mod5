import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "days")),
          title: "Just a Test"
        }
      ]
    };
  }
  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <div className="appointment-container">
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh", marginLeft: "250px" }}
        />
      </div>
    );
  }
}

export default Appointment;
