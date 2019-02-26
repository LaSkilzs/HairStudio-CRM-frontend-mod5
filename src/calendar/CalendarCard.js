import React from "react";

const CalendarCard = () => {
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
          <tr>
            <td> February 14, 2019 </td>
            <td> 10:30am </td>
            <td> Wash and Wrap </td>
            <td> Lois </td>
            <td> completed</td>
          </tr>
          <tr>
            <td> February 14, 2019 </td>
            <td> 10:30am </td>
            <td> Wash and Wrap </td>
            <td> Lois </td>
            <td> completed</td>
          </tr>
          <tr>
            <td> February 14, 2019 </td>
            <td> 10:30am </td>
            <td> Wash and Wrap </td>
            <td> Lois </td>
            <td> completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarCard;
