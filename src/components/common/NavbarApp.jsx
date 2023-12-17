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
          {location.pathname !== "/auth" && (
            <Nav.Link>
              <Link
                to={"/auth"}
                className="text-decoration-none"
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
