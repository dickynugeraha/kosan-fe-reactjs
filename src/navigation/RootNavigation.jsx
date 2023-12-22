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
        <Route path="/profile" Component={Profile} />
        <Route path="/admin" element={<Navigate to="/customers" />} />
        <Route path="/customers" Component={Customers} />
        <Route path="/transactions" Component={Transactions} />
        <Route path="/rooms-admin" Component={RoomsAdmin} />
      </Routes>
    );
  };

  return (
    <Router>
      <div className="App">
        {token?.length !== 0 || token !== null ? (
          <RouteAfterLogin />
        ) : (
          <RouteBeforeLogin />
        )}
      </div>
    </Router>
  );
};

export default RootNavigation;
