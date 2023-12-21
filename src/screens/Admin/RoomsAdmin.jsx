import React, { useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Table, Button, Modal } from "react-bootstrap";

const RoomsAdmin = () => {
  const [inputRoom, setInputRoom] = useState({
    number_room: "",
    price: "",
    status: "available",
    description: "",
  });
  const [isModalShow, setIsModalShow] = useState(false);

  const handleCloseModal = () => {
    setIsModalShow(false);
  };

  return (
    <SidebarAdmin>
      <h1 className="mb-5">Rooms</h1>
      <div className="d-flex justify-content-start mb-3">
        <Button onClick={() => setIsModalShow(true)}>Add Room</Button>
      </div>
      <Modal
        show={isModalShow}
        onHide={handleCloseModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>New room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: 120 }}>
              Room number
            </span>
            <input
              value={inputRoom.number_room}
              name="room_number"
              className="form-control"
              type="number"
              onChange={(e) =>
                setInputRoom((prevState) => {
                  return {
                    number_room: e.target.value,
                    price: prevState.price,
                    description: prevState.description,
                    status: prevState.status,
                  };
                })
              }
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: 120 }}>
              Price
            </span>
            <input
              value={inputRoom.price}
              name="price"
              className="form-control"
              type="number"
              onChange={(e) =>
                setInputRoom((prevState) => {
                  return {
                    number_room: prevState.number_room,
                    price: e.target.value,
                    description: prevState.description,
                    status: prevState.status,
                  };
                })
              }
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" style={{ width: 120 }}>
              Description
            </span>
            <input
              value={inputRoom.description}
              name="description"
              className="form-control"
              type="text"
              onChange={(e) =>
                setInputRoom((prevState) => {
                  return {
                    number_room: prevState.number_room,
                    price: prevState.price,
                    description: e.target.value,
                    status: prevState.status,
                  };
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleCloseModal}
            style={{ width: 100 }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
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
  );
};

export default RoomsAdmin;
