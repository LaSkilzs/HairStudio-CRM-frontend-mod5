import React from "react";
import CalendarList from "./CalendarList";
import "./calendar.css";

class CalendarContainer extends React.Component {
  render() {
    return (
      <div>
        <CalendarList user={this.props.user} />
      </div>
    );
  }
}

export default CalendarContainer;
