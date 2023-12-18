import React from "react";
import { Table } from "react-bootstrap";

const HistoryBooking = () => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Start Booking</th>
            <th>End Booking</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12 Agustus 2023</td>
            <td>12 Desember 2023</td>
            <td>OVO</td>
          </tr>
          <tr>
            <td>2</td>
            <td>12 Agustus 2022</td>
            <td>12 Desember 2022</td>
            <td>Gopay</td>
          </tr>
          <tr>
            <td>3</td>
            <td>12 Agustus 2022</td>
            <td>12 Desember 2022</td>
            <td>Gopay</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryBooking;
