import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import SectionHeader from "../../components/Home/SectionHeader";
import SectionOurRoom from "../../components/Home/SectionOurRoom";
import Footer from "../../components/common/Footer";
import SectionFacility from "../../components/Home/SectionFacility";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kosan Mak Ida</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SectionHeader />
      <div style={{ height: 100 }}></div>
      <SectionOurRoom />
      <div style={{ height: 40 }}></div>
      <SectionFacility />
      <div style={{ height: 100 }}></div>
      <Footer />
    </>
  );
};

export default Home;
