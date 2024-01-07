import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../screens/Home/Home";
import Rooms from "../screens/Rooms/Rooms";
import AuthUser from "../screens/Auth/AuthUser";
import Profile from "../screens/Profile/Profile";
import AuthAdmin from "../screens/Auth/AuthAdmin";
import Customers from "../screens/Admin/Customers";
import Transactions from "../screens/Admin/Transactions";
import RoomsAdmin from "../screens/Admin/RoomsAdmin";
import NotFound from "../screens/NotFound/NotFound";
import DetailRoomAdmin from "../screens/Admin/DetailRoomAdmin";
import DetailTransaction from "../screens/Admin/DetailTransaction";
import ProtectedRoute from "./ProtectedRoute";

const RootNavigation = () => {
  const token = sessionStorage.getItem("token");

  const RouteBeforeLogin = () => {
    return (
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/rooms" Component={Rooms} />
        <Route path="/auth" Component={AuthUser} />
        <Route path="/login-admin" Component={AuthAdmin} />
      </Routes>
    );
  };

  const RouteAfterLogin = () => {
    return (
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/rooms" Component={Rooms} />
        <Route path="/auth" Component={AuthUser} />
        <Route path="/login-admin" Component={AuthAdmin} />
        <Route path="/room/:id" Component={DetailRoomAdmin} />
        <Route path="/profile" Component={Profile} />
        <Route path="/admin" element={<Navigate to="/customers" />} />
        <Route path="/customers" Component={Customers} />
        <Route path="/transactions" Component={Transactions} />
        <Route path="/transactions/:id" Component={DetailTransaction} />
        <Route path="/rooms-admin" Component={RoomsAdmin} />
      </Routes>
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/rooms" Component={Rooms} />
          <Route path="/auth" Component={AuthUser} />
          <Route path="/login-admin" Component={AuthAdmin} />
          <Route element={<ProtectedRoute />}>
            <Route path="/room/:id" Component={DetailRoomAdmin} />
            <Route path="/profile" Component={Profile} />
            <Route path="/admin" element={<Navigate to="/customers" />} />
            <Route path="/customers" Component={Customers} />
            <Route path="/transactions" Component={Transactions} />
            <Route path="/transactions/:id" Component={DetailTransaction} />
            <Route path="/rooms-admin" Component={RoomsAdmin} />
          </Route>
        </Routes>
        {/* {token && <RouteAfterLogin />}
        {!token && <RouteBeforeLogin />} */}
      </Router>
    </div>
  );
};

export default RootNavigation;
