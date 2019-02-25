import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class AppointmentCard extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDate: undefined
    };
  }

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
    );
  }
}
export default AppointmentCard;
