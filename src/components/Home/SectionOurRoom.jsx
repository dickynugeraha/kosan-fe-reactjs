import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";

import imageRoom2 from "../../assets/images/rooms/room2.jpg";
import imageRoom3 from "../../assets/images/rooms/room3.jpg";
import imageRoom4 from "../../assets/images/rooms/room4.jpg";
import imageRoom5 from "../../assets/images/rooms/room5.jpg";
import imageRoom6 from "../../assets/images/rooms/room6.jpg";

import bgOurRoom from "../../assets/images/ourroom2.png";

const SectionOurRoom = () => {
  return (
    <div style={styles.boxImage}>
      <Container className="mt-4">
        <div
          className="d-flex align-items-center row"
          style={{ height: "80vh" }}
        >
          <div className="col-md-3 mb-3">
            <h1 style={{ textAlign: "left" }}>Our Room</h1>
            <p style={{ marginTop: 80, textAlign: "left" }}>
              Enjoy all the comforts of our facilities, by looking at some of
              the photos we took in some of the rooms. And trust us, your
              facilities are top-notch at an affordable price.
            </p>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-md-8">
            <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <div style={{ height: 400 }}>
                  <img
                    className="d-block w-100"
                    src={imageRoom5}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: 400 }}>
                  <img
                    className="d-block w-100"
                    src={imageRoom3}
                    alt="Second slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: 400 }}>
                  <img
                    className="d-block w-100"
                    src={imageRoom4}
                    alt="Third slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: 400 }}>
                  <img
                    className="d-block w-100"
                    src={imageRoom6}
                    alt="Third slide"
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div style={{ height: 400 }}>
                  <img
                    className="d-block w-100"
                    src={imageRoom2}
                    alt="Third slide"
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </div>
  );
};
const styles = {
  boxImage: {
    backgroundImage: `url(${bgOurRoom})`,
    height: "95vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

export default SectionOurRoom;
