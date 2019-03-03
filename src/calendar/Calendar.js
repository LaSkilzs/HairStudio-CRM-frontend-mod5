import React from "react";
import CalendarContainer from "./CalendarContainer";

class Calendar extends React.Component {
  render() {
    return (
      <section id="profile">
        <CalendarContainer user={this.props.user} />
      </section>
    );
  }
}

export default Calendar;
