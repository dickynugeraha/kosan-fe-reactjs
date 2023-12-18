import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavbarApp = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link
            to={"/"}
            className="text-decoration-none lobster-font"
            style={{ color: "white" }}
          >
            Kos Mrs.Ida
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="me-4">
            <Link
              to={"/profile"}
              className="text-decoration-none"
              style={{ color: "white" }}
            >
              Profile
            </Link>
          </Nav.Link>
          {location.pathname !== "/auth" && (
            <Nav.Link className="me-0">
              <Link
                to={"/auth"}
                className="text-decoration-none me-0"
                style={{ color: "white" }}
              >
                Login
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
