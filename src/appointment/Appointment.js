import React from "react";
import AppointmentList from "./AppointmentList";
import ScheduleList from "./ScheduleList";

class Appointment extends React.Component {
  render() {
    return (
      <div className="appointment-container">
        <h2>Appointment Container</h2>
        <AppointmentList />
        <ScheduleList />
      </div>
    );
  }
}

export default Appointment;
