import React, { useEffect } from "react";
import SidebarAdmin from "../../components/common/SidebarAdmin";
import sourceApi from "../../api/source-api";

const Admin = () => {
  useEffect(() => {
    const checkOrdersExpired = async () => {
      await sourceApi.checkOrderExpired();
    };
    checkOrdersExpired();
  }, []);

  return <SidebarAdmin></SidebarAdmin>;
};

export default Admin;
