import React, { useEffect, useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Table } from "react-bootstrap";
import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";

const Customers = () => {
  const token = sessionStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllUserHandler = async () => {
      setIsLoading(true);
      const response = await API.getAllUser({ token });
      console.log(response);
      if (response.success) {
        setUsers(response.data);
      } else {
        toast.error("Failed fetch customers", { duration: 4000 });
      }
      setIsLoading(false);
    };
    getAllUserHandler();
  }, []);

  return (
    <div>
      <SidebarAdmin>
        <h1 className="mb-5">Customers</h1>
        <Toaster />
        {isLoading ? (
          <GlobalLoading />
        ) : (
          <Card>
            <Table striped>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Job</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.job}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        )}
      </SidebarAdmin>
    </div>
  );
};

export default Customers;
