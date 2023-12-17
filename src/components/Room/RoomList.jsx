import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const RoomList = ({ rooms }) => {
  const [choosenId, setChoosenId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const choosenRoom = rooms.find((room) => room.title === choosenId);

  return (
    <div style={styles.roomBox}>
      {rooms.map((room, index) => (
        <>
          <div
            style={styles.roomItem}
            onClick={() => {
              setChoosenId(room.title);
              openModal();
            }}
            key={room.title}
          >
            <div className="d-flex">
              <div className="col-md-6" style={{ width: 150, height: 100 }}>
                <img
                  src={room.photo[0]}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6 text-start ms-3">
                <p className="mb-1"> Number {room.title}</p>
                <p className="mb-3">Rp. {room.price}</p>
                {room.status === "Available" ? (
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
        </>
      ))}

      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Room {choosenRoom?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel data-bs-theme="dark">
            {choosenRoom?.photo?.map((item) => {
              return (
                <Carousel.Item>
                  <div style={{ height: 400 }}>
                    <img
                      className="d-block w-100"
                      src={item}
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
            <p className="text-justify">
              Bebas Biaya Admin Kamu tidak akan dikenakan biaya admin saat
              melakukan pembayaran di Mamikos. Asuransi Khusus Penyewa
              Perlindungan selama ngekos atas kompensasi kehilangan barang dan
              kerusakan fasilitas pada unit kamar. Disediakan oleh PT Great
              Eastern Insurance Indonesia. Syarat & Ketentuan berlaku. Pro
              Service Ditangani secara profesional oleh tim Mamikos. Selama kamu
              ngekos di sini, ada tim dari Mamikos yang akan merespon saran dan
              komplainmu. Dikelola Mamikos, Terjamin Nyaman Kos ini
              operasionalnya dikelola dan distandardisasi oleh Mamikos.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={closeModal}>
            <div className="d-flex align-items-center">
              <FaWhatsapp size={32} color="#128c7e" />
              <p className="ms-2 mb-0" style={{ color: "#128c7e" }}>
                Contact us
              </p>
            </div>
          </Button>
          <Button variant="success">Order Now</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const styles = {
  roomBox: {
    marginBottom: 80,
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
