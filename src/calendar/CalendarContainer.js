import React from "react";
import CalendarList from "./CalendarList";

class CalendarContainer extends React.Component {
  render() {
    return (
      <div className="calendar-container">
        <h2>Calendar Container</h2>
        <CalendarList />
      </div>
    );
  }
}

export default CalendarContainer;
