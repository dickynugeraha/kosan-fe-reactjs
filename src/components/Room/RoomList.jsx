import React, { useState } from "react";
import { Button, Carousel, Container, Modal } from "react-bootstrap";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle, IoMdPaper } from "react-icons/io";
import { photoUrl } from "../../api/const";
import toast, { Toaster } from "react-hot-toast";
import API from "../../api/source-api";
import { useNavigate } from "react-router";
import GlobalLoading from "../common/GlobalLoading";
import { formatRupiah } from "../../helpers/stringFormat";

const RoomList = ({ rooms }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");

  const [choosenId, setChoosenId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const choosenRoom = rooms.find((room) => room.id == choosenId);
  const [inputOrder, setInputOrder] = useState({
    user_id: userId,
    room_id: "",
    start_order: "",
    end_order: "",
    period_order: "",
    total_price: "",
  });

  const photoItem = () => {
    const photos = [];
    for (let index = 1; index < choosenRoom?.photos?.length; index++) {
      photos.push(choosenRoom?.photos[index]);
    }
    return photos;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const orderRoomHandler = async () => {
    if (choosenRoom?.status !== "available") {
      toast.error("Room not available or already booked!");
      setTimeout(() => {
        toast.remove();
      }, 3000);
      return;
    }
    setIsLoading(true);
    const response = await API.createOrder({
      token: token,
      payload: {
        ...inputOrder,
        user_id: userId,
        room_id: choosenId,
        status: "waiting_payment",
        total_price: choosenRoom?.price * inputOrder.period_order,
      },
    });
    setIsLoading(false);

    if (response.success) {
      toast.success("Successfully added orders, lets pay now!", {
        duration: 2000,
      });
      setTimeout(() => {
        toast.remove();
        navigate("/profile");
      }, 4500);
    } else {
      toast.error("Failed added orders", {
        duration: 4000,
      });
      toast.remove();
    }
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
                <p className="mb-3">{formatRupiah(room.price)}</p>
                {room.status === "available" ? (
                  <div className="d-flex">
                    <FaCheckCircle color="#59de7c" size={24} />
                    <p className="ms-2" style={{ color: "#59de7c" }}>
                      {room.status === "available"
                        ? "Available"
                        : "Not available"}
                    </p>
                  </div>
                ) : (
                  <div className="d-flex">
                    <IoMdCloseCircle color="#c23466" size={24} />
                    <p className="ms-2" style={{ color: "#c23466" }}>
                      {room.status === "available"
                        ? "Available"
                        : "Not available"}
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
        <Modal.Header>
          <Toaster />
          <Container className="d-flex justify-content-between align-items-center">
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
                    {choosenRoom?.status === "available"
                      ? "Available"
                      : "Not available"}
                  </p>
                </div>
              )}
            </div>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
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
                <li> {formatRupiah(choosenRoom?.price)} / month</li>
                <li> {choosenRoom?.description}</li>
              </ul>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {token && (
            <Container>
              <h4 className="mb-3 text-start">Lets order</h4>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ width: 120 }}>
                  Start booking
                </span>
                <input
                  required
                  value={inputOrder.start_order}
                  name="start_order"
                  className="form-control"
                  type="date"
                  onChange={(e) =>
                    setInputOrder((prevState) => {
                      return {
                        start_order: e.target.value,
                        end_order: prevState.end_order,
                        period_order: prevState.period_order,
                        total_price: prevState.total_price,
                      };
                    })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ width: 120 }}>
                  End booking
                </span>
                <input
                  required
                  value={inputOrder.end_order}
                  name="end_order"
                  className="form-control"
                  type="date"
                  onChange={(e) =>
                    setInputOrder((prevState) => {
                      return {
                        start_order: prevState.start_order,
                        end_order: e.target.value,
                        period_order: prevState.period_order,
                        total_price: prevState.total_price,
                      };
                    })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ width: 120 }}>
                  <div className="text-start">
                    <p className="mb-0">Period order</p>
                    <p className="mb-0" style={{ fontSize: "12px" }}>
                      (Month)
                    </p>
                  </div>
                </span>
                <input
                  required
                  value={inputOrder.period_order}
                  name="period_order"
                  className="form-control"
                  type="number"
                  onChange={(e) =>
                    setInputOrder((prevState) => {
                      return {
                        start_order: prevState.start_order,
                        end_order: prevState.end_order,
                        period_order: e.target.value,
                        total_price: prevState.total_price,
                      };
                    })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" style={{ width: 120 }}>
                  Total price
                </span>
                <input
                  required
                  name="total_price"
                  className="form-control"
                  type="text"
                  readOnly
                  value={formatRupiah(
                    choosenRoom?.price * inputOrder.period_order
                  )}
                />
              </div>
            </Container>
          )}
          <Container className="d-flex justify-content-end">
            {isLoading ? (
              <GlobalLoading />
            ) : (
              <>
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
                {token && (
                  <Button
                    variant="success"
                    className="ms-3"
                    onClick={orderRoomHandler}
                  >
                    Order Now
                  </Button>
                )}
              </>
            )}
          </Container>
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
