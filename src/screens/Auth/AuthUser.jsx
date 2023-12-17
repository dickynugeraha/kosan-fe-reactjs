import React, { useState } from "react";
import NavbarApp from "../../components/common/NavbarApp";
import { Button, Card } from "react-bootstrap";

const AuthUser = () => {
  const [isLoginSection, setIsLoginSection] = useState(true);

  const [inputLogin, setInputLogin] = useState({ email: "", password: "" });
  const [inputRegister, setInputRegister] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const submitedForm = () => {
    if (isLoginSection) {
      console.log(inputLogin.email);
      console.log(inputLogin.password);
      setInputLogin({ email: "", password: "" });
    } else {
      console.log(inputRegister.name);
      console.log(inputRegister.email);
      console.log(inputRegister.address);
      console.log(inputRegister.password);
      setInputRegister({ name: "", email: "", address: "", password: "" });
    }
  };

  return (
    <>
      <NavbarApp />
      <div className="mt-5">
        <h1 className="mb-4">{isLoginSection ? "Login" : "Register"}</h1>

        <div className="d-flex justify-content-center">
          <Card
            style={{
              width: "42rem",
              backgroundColor: "rgba(235, 235, 235, 0.7)",
            }}
            className="p-4"
          >
            {isLoginSection && (
              <>
                <div className="input-group mb-3">
                  <span class="input-group-text">Email</span>
                  <input
                    value={inputLogin.email}
                    name="email"
                    className="form-control"
                    type="email"
                    onChange={(e) =>
                      setInputLogin((prevState) => {
                        return {
                          email: e.target.value,
                          password: prevState.password,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text">Password</span>
                  <input
                    value={inputLogin.password}
                    name="password"
                    className="form-control"
                    type="password"
                    onChange={(e) =>
                      setInputLogin((prevState) => {
                        return {
                          email: prevState.email,
                          password: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </>
            )}
            {!isLoginSection && (
              <>
                <div className="input-group mb-3">
                  <span class="input-group-text">Name</span>
                  <input
                    value={inputRegister.name}
                    className="form-control"
                    type="text"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: e.target.value,
                          email: prevState.email,
                          address: prevState.address,
                          password: prevState.password,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text">Email</span>
                  <input
                    value={inputRegister.email}
                    className="form-control"
                    type="email"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: e.target.value,
                          address: prevState.address,
                          password: prevState.password,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text">Address</span>
                  <textarea
                    className="form-control"
                    type="text"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: prevState.email,
                          address: e.target.value,
                          password: prevState.password,
                        };
                      })
                    }
                  >
                    {inputRegister.address}
                  </textarea>
                </div>
                <div className="input-group mb-3">
                  <span class="input-group-text">Password</span>
                  <input
                    value={inputRegister.password}
                    className="form-control"
                    type="password"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: prevState.email,
                          address: prevState.address,
                          password: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </>
            )}
            <div className="d-flex justify-content-between align-items-center">
              {isLoginSection ? (
                <p
                  className="text-decoration-underline ms-1 mb-0"
                  onClick={() => setIsLoginSection(false)}
                >
                  Register
                </p>
              ) : (
                <p
                  className="text-decoration-underline ms-1 mb-0"
                  onClick={() => setIsLoginSection(true)}
                >
                  Login
                </p>
              )}

              <Button
                style={{ width: 100 }}
                variant="secondary"
                onClick={submitedForm}
              >
                {isLoginSection ? "Login" : "Register"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AuthUser;
