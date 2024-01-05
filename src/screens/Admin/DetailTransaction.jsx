import React from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { formatDate } from "../../helpers/stringFormat";

const DetailTransaction = () => {
  const location = useLocation();
  const order = location.state;

  return (
    <SidebarAdmin>
      <Container>
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
                  <h4>Orders</h4>
                  <p className="text-muted m-0">Address</p>
                  <p> {order.user.address}</p>
                  <p className="text-muted m-0">
                    Order date: {formatDate(order.created_at)}
                  </p>
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
