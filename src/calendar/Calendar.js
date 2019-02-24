import React from "react";
import CalendarContainer from "./CalendarContainer";

class Calendar extends React.Component {
  render() {
    return (
      <section id="profile">
        <h2>Calendar Here!</h2>
        <CalendarContainer />
      </section>
    );
  }
}

export default Calendar;
