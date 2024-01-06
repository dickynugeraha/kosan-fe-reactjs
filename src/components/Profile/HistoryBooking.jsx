import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Table, Row } from "react-bootstrap";
import API from "../../api/source-api";
import GlobalLoading from "../common/GlobalLoading";
import { formatDate, formatRupiah } from "../../helpers/stringFormat";
import { photoUrl } from "../../api/const";

const HistoryBooking = () => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("user_id");

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [choosenId, setChoosenId] = useState("");

  const choosenBook = orders.find((order) => order.id === choosenId);

  useEffect(() => {
    const getOrdersByUserId = async () => {
      setIsLoading(true);
      const response = await API.ordersByUser({ token: token, userId: userId });
      console.log(response);
      if (response.success) {
        setOrders(response.data);
      } else {
        return;
      }
      console.log(orders);
      setIsLoading(false);
    };

    getOrdersByUserId();
  }, []);

  const statusPayment = {
    waiting_approval: "Pending approval",
    need_payment: "Need payment",
  };

  return (
    <div>
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <Table striped>
          {orders.length === 0 ? (
            <p>No data found!</p>
          ) : (
            <>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Start Booking</th>
                  <th>End Booking</th>
                  <th>Room</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{order.start_order}</td>
                    <td>{order.end_order}</td>
                    <td>{order.room.number_room}</td>
                    <td>{formatRupiah(order.total_price)}</td>
                    <td
                      style={{ color: "#0070E0" }}
                      onClick={() => {
                        setShowModal(true);
                        setChoosenId(order.id);
                      }}
                    >
                      Detail
                    </td>
                  </tr>
                ))}
              </tbody>
              <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Container>
                    <h5 className="mb-0">Order #00000{choosenBook?.id}</h5>
                    <p
                      className="text-muted mb-0 mt-2"
                      style={{ fontStyle: "italic" }}
                    >
                      {formatDate(choosenBook?.created_at)}
                    </p>
                  </Container>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <Card className="p-3">
                      <Table>
                        <thead>
                          <tr>
                            <th>Room number</th>
                            <th>Price</th>
                            <th>Period order</th>
                            <th>Total price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{choosenBook?.room.number_room}</td>
                            <td>{formatRupiah(choosenBook?.room.price)}</td>
                            <td>{choosenBook?.period_order} month</td>
                            <td>{formatRupiah(choosenBook?.total_price)}</td>
                          </tr>
                        </tbody>
                      </Table>
                      {choosenBook?.payment_method &&
                        choosenBook?.photo_transfer && (
                          <Row>
                            <Col>
                              <Card className="p-3">
                                <p className="m-0 fw-bold">Payment with</p>
                                <p className="m-0">
                                  {choosenBook?.payment_method === "bank"
                                    ? "Bank"
                                    : "OVO, DATA or GOPAY"}
                                </p>
                                <p className="m-0 fw-bold mt-2">Status order</p>
                                <p className="m-0">
                                  {statusPayment[choosenBook?.status]}
                                </p>
                              </Card>
                            </Col>
                            <Col>
                              <Card className="p-3">
                                <p className="fw-bold">Proof of payment</p>
                                <div style={{ width: "300px" }}>
                                  <img
                                    src={`${photoUrl}/payment_images/${choosenBook?.photo_transfer}`}
                                    style={{
                                      width: "100%",
                                      borderRadius: "8px",
                                    }}
                                  />
                                </div>
                              </Card>
                            </Col>
                          </Row>
                        )}
                    </Card>
                  </Container>
                </Modal.Body>
              </Modal>
            </>
          )}
        </Table>
      )}
    </div>
  );
};

export default HistoryBooking;
