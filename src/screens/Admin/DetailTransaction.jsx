import React, { useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { formatDate } from "../../helpers/stringFormat";
import { FaArrowLeftLong } from "react-icons/fa6";
import { photoUrl } from "../../api/const";
import API from "../../api/source-api";
import toast from "react-hot-toast";
import GlobalLoading from "../../components/common/GlobalLoading";

const DetailTransaction = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  const order = location.state;

  const [isLoading, setIsLoading] = useState(false);

  const [statusOrder, setStatusOrder] = useState(order.status);

  const sendChangeStatusOrder = async (value) => {
    setIsLoading(true);
    const response = await API.changeStatusOrder({
      token: token,
      payload: { status: value, orderId: order.id },
    });
    if (response.success) {
      setStatusOrder(value);
      toast.success(response.message);
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }
    setIsLoading(false);
  };

  return (
    <SidebarAdmin>
      <Container className="text-start">
        <FaArrowLeftLong
          size={20}
          className="mb-3"
          onClick={() => navigate(-1)}
        />
        <Card>
          <Card.Header>
            <h3>Detail Transaction</h3>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Card className="text-start p-3">
                  <h4>{order.user.name}</h4>
                  <p className="text-muted m-0">Address</p>
                  <p className="mb-2"> {order.user.address}</p>
                  <p className="text-muted m-0">Order date</p>
                  <p> {formatDate(order.created_at)}</p>
                </Card>
              </Col>
              <Col md={8}>
                <Card className="text-start p-3">
                  <div>
                    <h4 className="text-center mb-4">Orders</h4>
                  </div>
                  <div className="d-flex row">
                    <div className="col-md-6">
                      <p className="text-muted m-0">Payment method</p>
                      <p className="mb-2">
                        {order.payment_method === "bank"
                          ? "Bank"
                          : "Ovo / Dana / Gopay"}
                      </p>
                      <p className="text-muted m-0">Start order</p>
                      <p className="mb-2"> {order.start_order}</p>
                      <p className="text-muted m-0">End order</p>
                      <p className="mb-2"> {order.end_order}</p>
                      <p className="text-muted m-0">Period order</p>
                      <p className="mb-2"> {order.period_order} month</p>
                      <p className="text-muted m-0">Status</p>
                      <p className="mb-2"> {statusOrder}</p>
                      {isLoading ? (
                        <GlobalLoading />
                      ) : (
                        <>
                          <p className="text-muted m-0 mb-2">
                            Change status order
                          </p>
                          <select
                            class="form-control mb-3"
                            defaultValue={statusOrder}
                            onChange={(e) =>
                              sendChangeStatusOrder(e.target.value)
                            }
                          >
                            <option value={"need_payment"}>Need Payment</option>
                            <option value={"waiting_approval"}>
                              Waiting Approval
                            </option>
                            <option value={"success"}>Success</option>
                            <option value={"failed"}>Failed</option>
                          </select>
                        </>
                      )}
                    </div>
                    <div className="col-md-6">
                      <p className="text-muted mb-2">Proof of payment</p>
                      <div>
                        <img
                          style={{ width: "100%" }}
                          src={`${photoUrl}/payment_images/${order.photo_transfer}`}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </SidebarAdmin>
  );
};

export default DetailTransaction;
