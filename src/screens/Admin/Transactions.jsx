import React, { useState } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import { Card, Nav, Table } from "react-bootstrap";
import TransactionStatus from "../../components/Transactions/TransactionStatus";

const Bookings = () => {
  const [statusTransac, setStatusTransac] = useState("need_payment");

  return (
    <SidebarAdmin>
      <h1 className="mb-5">Transactions</h1>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link
                eventKey={"link-0"}
                {...(statusTransac === "need_payment" ? "active" : "")}
                onClick={() => setStatusTransac("need_payment")}
              >
                Need Payment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                {...(statusTransac === "waiting_approval" ? "active" : "")}
                onClick={() => setStatusTransac("waiting_approval")}
              >
                Waitng Approval
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                {...(statusTransac === "sucess" ? "active" : "")}
                onClick={() => setStatusTransac("success")}
              >
                Success
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-3"
                {...(statusTransac === "failed" ? "active" : "")}
                onClick={() => setStatusTransac("failed")}
              >
                Failed
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <TransactionStatus status={statusTransac} />
        </Card.Body>
      </Card>
    </SidebarAdmin>
  );
};

export default Bookings;
