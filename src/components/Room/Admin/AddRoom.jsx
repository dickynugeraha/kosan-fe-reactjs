import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { FiMinusCircle } from "react-icons/fi";
import API from "../../../api/source-api";
import GlobalLoading from "../../common/GlobalLoading";

const AddRoom = ({ isModalShow, handleCloseModal, isAddRoom }) => {
  const token = sessionStorage.getItem("token");

  const [componentPhotos, setComponentPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [inputRoom, setInputRoom] = useState({
    number_room: "",
    price: "",
    status: "available",
    description: "",
  });

  const addRoomHandler = async () => {
    if (images.length === 0) {
      toast.error("Must be upload image room");
      return;
    }

    const dataForm = new FormData();
    dataForm.append("number_room", inputRoom.number_room);
    dataForm.append("price", inputRoom.price);
    dataForm.append("status", inputRoom.status);
    dataForm.append("description", inputRoom.description);
    images.forEach((image_file) => {
      dataForm.append("file[]", image_file);
    });

    setIsLoading(true);
    const response = await API.addRoom({ token: token, payload: dataForm });
    setIsLoading(false);
    if (response.success) {
      toast.success("Successfully added room");
    } else {
      toast.error("Failed added room");
    }

    setInputRoom({
      number_room: "",
      price: "",
      status: "available",
      description: "",
    });
    setImages([]);
    handleCloseModal();
    isAddRoom();
  };

  return (
    <Modal
      show={isModalShow}
      onHide={handleCloseModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Toaster />
      <Modal.Header closeButton>
        <Modal.Title>New room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3">
          <span className="input-group-text" style={{ width: 108 }}>
            Number
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
          <span className="input-group-text" style={{ width: 108 }}>
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
          <span className="input-group-text" style={{ width: 108 }}>
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
        {componentPhotos.map((el) => (
          <div
            className="input-group mb-3 d-flex justify-content-between align-items-center"
            key={el}
          >
            <input
              className="form-control"
              type="file"
              onChange={(e) =>
                setImages((prevState) => [e.target.files[0], ...prevState])
              }
            />
            <FiMinusCircle
              size={24}
              color="grey"
              className="ms-3"
              onClick={() =>
                setComponentPhotos((prevState) =>
                  prevState.filter((item) => item !== el)
                )
              }
            />
          </div>
        ))}
        <p
          className="text-end text-decoration-underline"
          style={{ color: "#0000EE" }}
          onClick={() => {
            setComponentPhotos((prevState) => {
              return [Math.floor(Math.random() * 10), ...prevState];
            });
          }}
        >
          Add more photo
        </p>
      </Modal.Body>
      <Modal.Footer>
        {isLoading ? (
          <GlobalLoading />
        ) : (
          <Button
            variant="primary"
            onClick={addRoomHandler}
            style={{ width: 100 }}
          >
            Add
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default AddRoom;
