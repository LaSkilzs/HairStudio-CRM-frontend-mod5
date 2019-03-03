import React from "react";

const CalendarCard = props => {
  console.log(props);
  return (
    <div className="calendar-card">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>HairStyle</th>
            <th>Stylist</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {props.appointments.map((appointment, index) => {
            return (
              <tr key={index}>
                <td> {appointment.date}</td>
                <td> {appointment.start_time} </td>
                <td> {appointment.title} </td>
                <td> {appointment.stylist_id} </td>
                <td> {appointment.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarCard;
