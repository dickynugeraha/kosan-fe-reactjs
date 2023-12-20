import React, { Children } from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link } from "react-router-dom";

const SidebarAdmin = ({ children }) => {
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
        <CDBSidebarMenu>
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
        </CDBSidebarMenu>
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
