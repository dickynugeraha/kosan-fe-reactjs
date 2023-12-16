import React from "react";
import { Card, Container } from "react-bootstrap";
import { FaHome, FaRoad, FaDollarSign } from "react-icons/fa";
import "./Home.css";

const SectionFacility = () => {
  return (
    <Container>
      <h1>Facility</h1>
      <p>
        Our boarding house has several advantages over other boarding houses.
      </p>
      <div className="d-flex justify-content-around my-5">
        <Card
          style={{ width: "18rem", borderColor: "#ed5898" }}
          className="p-3 card"
        >
          <Card.Body>
            <Card.Subtitle className="mb-3 text-start">
              <FaRoad size={80} color="#ed5898" />
            </Card.Subtitle>
            <Card.Title className="text-start" style={{ color: "#ed5898" }}>
              Strategic place
            </Card.Title>
            <Card.Text className="text-start text-muted">
              It is strategically located surrounded by eateries and gas
              stations as well as the nearby toll road.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", borderColor: "#84c48e" }}
          className="p-3 card"
        >
          <Card.Body>
            <Card.Subtitle className="mb-3 text-start">
              <FaHome size={80} color="#84c48e" />
            </Card.Subtitle>
            <Card.Title className="text-start " style={{ color: "#84c48e" }}>
              A cozy place
            </Card.Title>
            <Card.Text className="text-start text-muted">
              Various facilities are provided, such as billiards, an en suite
              bathroom and a private kitchen.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem", borderColor: "#84a9c4" }}
          className="p-3 card"
        >
          <Card.Body>
            <Card.Subtitle className="mb-3 text-start">
              <FaDollarSign size={80} color="#84a9c4" />
            </Card.Subtitle>
            <Card.Title className="text-start" style={{ color: "#84a9c4" }}>
              Affordable price
            </Card.Title>
            <Card.Text className="text-start text-muted">
              We offer affordable prices with the best facilities
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SectionFacility;
