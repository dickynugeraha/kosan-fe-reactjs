import React, { useEffect, useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Table, Button } from "react-bootstrap";
import AddRoom from "../../components/Room/Admin/AddRoom";
import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";

const RoomsAdmin = () => {
  const token = sessionStorage.getItem("token");

  const [isModalShow, setIsModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  const [rooms, setRooms] = useState([]);

  const getAllRooms = async () => {
    setIsLoading(true);
    const response = await API.getRooms();
    setIsLoading(false);

    if (response.success) {
      setRooms(response.data);
    }
  };

  const isReloadData = () => {
    getAllRooms();
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <SidebarAdmin>
      <h1 className="mb-5">Rooms</h1>
      <div className="d-flex justify-content-start mb-3">
        <Button onClick={() => setIsModalShow(true)}>Add Room</Button>
      </div>
      <AddRoom
        isModalShow={isModalShow}
        handleCloseModal={handleCloseModal}
        isAddRoom={isReloadData}
      />
      <Toaster />
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <Card>
          <Table striped>
            <thead>
              <tr>
                <th>No</th>
                <th>Room Number</th>
                <th>Price</th>
                <th>Status</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{room.number_room}</td>
                  <td>{room.price}</td>
                  <td>{room.status}</td>
                  <td>{room.description}</td>
                  <td>
                    <p
                      className="text-center text-decoration-underline"
                      style={{ color: "#0000EE" }}
                      onClick={() => {}}
                    >
                      Detail
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </SidebarAdmin>
  );
};

export default RoomsAdmin;
