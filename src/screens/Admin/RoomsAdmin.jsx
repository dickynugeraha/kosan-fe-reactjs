import React, { useEffect, useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Table, Button, Modal } from "react-bootstrap";
import AddRoom from "../../components/Room/Admin/AddRoom";
import API from "../../api/source-api";
import toast, { Toaster } from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";
import { useNavigate } from "react-router";

const RoomsAdmin = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const [isModalAddShow, setIsModalAddShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCloseAddModal = () => {
    setIsModalAddShow(false);
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
        <Button onClick={() => setIsModalAddShow(true)}>Add Room</Button>
      </div>
      <AddRoom
        isModalShow={isModalAddShow}
        handleCloseModal={handleCloseAddModal}
        isReloadData={isReloadData}
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
              {rooms.length === 0 && (
                <td colSpan={6}>
                  <p className="text-center mb-0">No data found</p>
                </td>
              )}
              {rooms.map((room, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{room.number_room}</td>
                  <td>{room.price}</td>
                  <td>{room.status}</td>
                  <td>{room.description}</td>
                  <td>
                    <p
                      style={{ color: "#0070E0" }}
                      onClick={() => {
                        navigate(`/room/${room.id}`, {
                          state: { rooms: rooms },
                        });
                      }}
                    >
                      Detail
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Modal>
            <Modal.Header>Detail Rooms</Modal.Header>
          </Modal>
        </Card>
      )}
    </SidebarAdmin>
  );
};

export default RoomsAdmin;
