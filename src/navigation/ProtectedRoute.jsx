import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
  const token = sessionStorage.getItem("token");
  return token !== null ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
