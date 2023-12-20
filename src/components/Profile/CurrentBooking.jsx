import React from "react";
import { Table } from "react-bootstrap";

const CurrentBooking = () => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Start Booking</th>
            <th>End Booking</th>
            <th>Room</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12 Agustus 2023</td>
            <td>12 Desember 2023</td>
            <td>101</td>
            <td>OVO</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CurrentBooking;
