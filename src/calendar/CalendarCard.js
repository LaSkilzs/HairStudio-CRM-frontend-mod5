import React from "react";
import moment from "moment";

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
                <td> {moment(appointment.date).format('LL')}</td>
                <td> {moment(appointment.start_time).format('HH:mm ')} </td>
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
