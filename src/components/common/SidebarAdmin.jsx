import React from "react";

import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SidebarAdmin = ({ children }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    sessionStorage.clear();

    navigate("/");
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            to={"/admin"}
            className="text-decoration-none"
            style={{ color: "white" }}
          >
            Kos Mrs.Ida
          </Link>
        </CDBSidebarHeader>
        <div
          className="d-flex flex-column justify-content-between"
          style={{ height: "100%" }}
        >
          <div>
            <CDBSidebarMenuItem>
              <Link
                to={"/customers"}
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Customers
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link
                to={"/transactions"}
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Transactions
              </Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem>
              <Link
                to={"/rooms-admin"}
                className="text-decoration-none"
                style={{ color: "white" }}
              >
                Rooms
              </Link>
            </CDBSidebarMenuItem>
          </div>
          <div>
            <CDBSidebarMenuItem>
              <Button
                variant="secondary"
                style={{ width: "100%" }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </CDBSidebarMenuItem>
          </div>
        </div>
      </CDBSidebar>
      <div
        className="p-3"
        style={{
          maxHeight: "100vh",
          width: "100%",
          overflowX: "unset",
          overflowY: "scroll",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarAdmin;
