import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import NavbarApp from "../../components/common/NavbarApp";
import { Button, Card } from "react-bootstrap";
import API from "../../api/source-api";
import { AuthContext } from "../../store/context/auth-context";
import { useNavigate } from "react-router";

const AuthUser = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const [isLoginSection, setIsLoginSection] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const [isRedirect, setisRedirect] = useState(false);

  const [inputLogin, setInputLogin] = useState({ email: "", password: "" });
  const [inputRegister, setInputRegister] = useState({
    name: "",
    email: "",
    address: "",
    job: "",
    phone: "",
    password: "",
  });

  // useEffect(() => {
  //   if (authContext.isLogin()) {
  //     const isLogin = authContext.isLogin();

  //     if (isLogin) {
  //       setisRedirect(true);
  //     }
  //   }
  // }, [authContext]);

  const submitedForm = async () => {
    if (isLoginSection) {
      setIsLoading(true);
      const response = await API.loginUser({
        payload: { email: inputLogin.email, password: inputLogin.password },
      });
      if (response?.success) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user_id", response.data.user_id);

        authContext.login({
          token: response.data.token,
          user_id: response.data.user_id,
        });
        // toast.success("Successfully login.", {
        //   duration: 4000,
        // });
        navigate("/", { replace: true });
      } else {
        toast.error("Failed login, please check email or password.", {
          duration: 4000,
        });
      }
      setInputLogin({ email: "", password: "" });
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const response = await API.register({
        payload: {
          name: inputRegister.name,
          email: inputRegister.email,
          address: inputRegister.address,
          job: inputRegister.job,
          phone: inputRegister.phone,
          password: inputRegister.password,
        },
      });
      if (response.success) {
        toast.success("Successfully register.", {
          duration: 4000,
        });
      } else {
        toast.error("Failed register, email is available.", {
          duration: 4000,
        });
      }
      setIsLoginSection(true);
      setInputRegister({ name: "", email: "", address: "", password: "" });
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavbarApp />
      <div className="mt-5">
        <Toaster />
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
                  <span className="input-group-text" style={{ width: 100 }}>
                    Email
                  </span>
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
                  <span className="input-group-text" style={{ width: 100 }}>
                    Password
                  </span>
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
                  <span className="input-group-text" style={{ width: 100 }}>
                    Name
                  </span>
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
                          job: prevState.job,
                          phone: prevState.phone,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ width: 100 }}>
                    Email
                  </span>
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
                          phone: prevState.phone,
                          job: prevState.job,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ width: 100 }}>
                    Job
                  </span>
                  <input
                    value={inputRegister.job}
                    className="form-control"
                    type="text"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: prevState.email,
                          job: e.target.value,
                          phone: prevState.phone,
                          address: prevState.address,
                          password: prevState.password,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ width: 100 }}>
                    Phone
                  </span>
                  <input
                    value={inputRegister.phone}
                    className="form-control"
                    type="number"
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: prevState.email,
                          address: prevState.address,
                          password: prevState.password,
                          phone: e.target.value,
                          job: prevState.job,
                        };
                      })
                    }
                  />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ width: 100 }}>
                    Address
                  </span>
                  <textarea
                    className="form-control"
                    type="text"
                    value={inputRegister.address}
                    onChange={(e) =>
                      setInputRegister((prevState) => {
                        return {
                          name: prevState.name,
                          email: prevState.email,
                          address: e.target.value,
                          password: prevState.password,
                          job: prevState.job,
                          phone: prevState.phone,
                        };
                      })
                    }
                  >
                    {inputRegister.address}
                  </textarea>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" style={{ width: 100 }}>
                    Password
                  </span>
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
                          job: prevState.job,
                          phone: prevState.phone,
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
              {isLoading ? (
                <div
                  style={{ width: 100 }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <ClipLoader
                    color={"grey"}
                    loading={isLoading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                <Button
                  style={{ width: 100 }}
                  variant="secondary"
                  onClick={submitedForm}
                >
                  {isLoginSection ? "Login" : "Register"}
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AuthUser;
