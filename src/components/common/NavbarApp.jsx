import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/context/auth-context";
import { useNavigate } from "react-router-dom";

const NavbarApp = () => {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");
    navigate("/");
  };

  const NavbarLink = () => {
    let component = (
      <Nav.Link>
        <Link
          to={"/auth"}
          className="text-decoration-none"
          style={{ color: "white" }}
        >
          Login
        </Link>
      </Nav.Link>
    );

    {
      token?.length > 0 &&
        (component = (
          <>
            <Nav.Link className="me-4">
              <Link
                to={"/profile"}
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Profile
              </Link>
            </Nav.Link>
            <Nav.Link className="me-4">
              <p
                className="text-decoration-none m-0"
                style={{ color: "white" }}
                onClick={logoutHandler}
              >
                Logout
              </p>
            </Nav.Link>
          </>
        ));
    }

    return component;
  };

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
          <NavbarLink />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
