import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { photoUrl } from "../../api/const";
import toast, { Toaster } from "react-hot-toast";

const RoomList = ({ rooms }) => {
  const token = sessionStorage.getItem("token");

  const [choosenId, setChoosenId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const choosenRoom = rooms.find((room) => room.id == choosenId);

  const photoItem = () => {
    const photos = [];
    for (let index = 1; index < choosenRoom?.photos?.length; index++) {
      photos.push(choosenRoom?.photos[index]);
    }
    return photos;
  };

  return (
    <div style={styles.roomBox}>
      {rooms.map((room, index) => (
        <div key={index}>
          <div
            style={styles.roomItem}
            onClick={() => {
              setChoosenId(room.id);
              openModal();
            }}
          >
            <div className="d-flex">
              <div className="col-md-6" style={{ width: 150, height: 100 }}>
                <img
                  src={`${photoUrl}/room_images/${room.photos[1]}`}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 text-start ms-3">
                <p className="mb-1"> Number {room.number_room}</p>
                <p className="mb-3">Rp. {room.price}</p>
                {room.status === "available" ? (
                  <div className="d-flex">
                    <FaCheckCircle color="#59de7c" size={24} />
                    <p className="ms-2" style={{ color: "#59de7c" }}>
                      {room.status}
                    </p>
                  </div>
                ) : (
                  <div className="d-flex">
                    <IoMdCloseCircle color="#c23466" size={24} />
                    <p className="ms-2" style={{ color: "#c23466" }}>
                      {room.status}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex justify-content-space-between align-items-center">
          <Modal.Title>Room {choosenRoom?.number_room}</Modal.Title>
          <div>
            {choosenRoom?.status === "available" ? (
              <div className="d-flex">
                <FaCheckCircle color="#59de7c" size={24} />
                <p className="ms-2 mb-0" style={{ color: "#59de7c" }}>
                  {choosenRoom?.status}
                </p>
              </div>
            ) : (
              <div className="d-flex">
                <IoMdCloseCircle color="#c23466" size={24} />
                <p className="ms-2 mb-0" style={{ color: "#c23466" }}>
                  {choosenRoom?.status}
                </p>
              </div>
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          <Carousel data-bs-theme="dark">
            {photoItem().map((item) => {
              return (
                <Carousel.Item>
                  <div style={{ height: 400 }}>
                    <img
                      className="d-block w-100"
                      src={`${photoUrl}/room_images/${item}`}
                      alt="image"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="mt-3">
            <h4>Description</h4>
            <ul>
              <li> Rp. {choosenRoom?.price} / month</li>
              <li> {choosenRoom?.description}</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={closeModal}>
            <a
              href="https://wa.me/6287824807924"
              className="text-muted text-decoration-none"
              target="_blank"
            >
              <div className="d-flex align-items-center">
                <FaWhatsapp size={32} color="#128c7e" />
                <p className="ms-2 mb-0" style={{ color: "#128c7e" }}>
                  Contact us
                </p>
              </div>
            </a>
          </Button>
          {token && <Button variant="success">Order Now</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const styles = {
  roomBox: {
    display: "grid",
    gap: "18px",
    gridTemplateColumns: "auto auto auto",
  },
  roomItem: {
    padding: 18,
    backgroundColor: "#f7f7f7",
    borderRadius: "4px",
  },
};

export default RoomList;
