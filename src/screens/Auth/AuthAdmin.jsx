import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Button, Card } from "react-bootstrap";

import API from "../../api/source-api";
import { useNavigate } from "react-router";

const AuthAdmin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [inputLogin, setInputLogin] = useState({ email: "", password: "" });

  const submitedForm = async () => {
    setIsLoading(true);
    const response = await API.loginAdmin({
      payload: { email: inputLogin.email, password: inputLogin.password },
    });
    if (response?.success) {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("admin_id", response.data.admin_id);

      navigate("/admin", { replace: true });
    } else {
      toast.error("Failed login, please check email or password.", {
        duration: 4000,
      });
    }
    setInputLogin({ email: "", password: "" });
    setIsLoading(false);
  };

  return (
    <>
      <div className="mt-4 p-4">
        <Toaster />
        <h1 className="mb-4">Login Admin</h1>
        <div className="d-flex justify-content-center">
          <Card
            style={{
              width: "42rem",
              backgroundColor: "rgba(235, 235, 235, 0.7)",
            }}
            className="p-4"
          >
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
            <div className="d-flex justify-content-between align-items-center">
              <FaArrowLeftLong
                size={20}
                className="ms-1"
                onClick={() => navigate(-1)}
              />
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
                  Login
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AuthAdmin;
