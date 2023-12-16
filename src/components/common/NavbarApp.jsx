import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarApp = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <Link
            to={"/"}
            className="text-decoration-none lobster-font"
            style={{ color: "white" }}
          >
            Kos Mrs.Ida
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
