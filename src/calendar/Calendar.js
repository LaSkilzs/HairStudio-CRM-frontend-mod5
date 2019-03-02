import React from "react";
import CalendarContainer from "./CalendarContainer";
import Navbar from "../app/Navbar";
import Header from "../app/Header";

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
