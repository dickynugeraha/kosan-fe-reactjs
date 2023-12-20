import React from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Table } from "react-bootstrap";

const Customers = () => {
  return (
    <div>
      <SidebarAdmin>
        <h1 className="mb-5">Customers</h1>
        <Card>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kale Pramono</td>
                <td>kale@gmail.com</td>
                <td>Jl. jalan yuk</td>
                <td>0225418257525</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Kale Pramono</td>
                <td>kale@gmail.com</td>
                <td>Jl. jalan yuk</td>
                <td>0225418257525</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Kale Pramono</td>
                <td>kale@gmail.com</td>
                <td>Jl. jalan yuk</td>
                <td>0225418257525</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </SidebarAdmin>
    </div>
  );
};

export default Customers;
