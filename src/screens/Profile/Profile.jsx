import React, { useState } from "react";
import NavbarApp from "../../components/common/NavbarApp";
import Footer from "../../components/common/Footer";
import { Card, Col, Container, Row, Nav } from "react-bootstrap";

import UserInfo from "../../components/Profile/UserInfo";
import HistoryBooking from "../../components/Profile/HistoryBooking";
import CurrentBooking from "../../components/Profile/CurrentBooking";

const Profile = () => {
  const [screenSection, setScreenSection] = useState(0);

  const attributeHistory = screenSection === 0 ? "active" : "";
  const attributeCurrent = screenSection === 1 ? "active" : "";

  const screen = {
    0: <HistoryBooking />,
    1: <CurrentBooking />,
  };

  return (
    <div>
      <NavbarApp />
      <Container className="my-5 text-start" style={{ minHeight: "90vh" }}>
        <Row>
          <Col xs={12} md={4}>
            <UserInfo />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link
                      eventKey={"link-0"}
                      {...attributeHistory}
                      onClick={() => setScreenSection(0)}
                    >
                      History transaction
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="link-1"
                      {...attributeCurrent}
                      onClick={() => setScreenSection(1)}
                    >
                      Current booking
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>{screen[screenSection]}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
