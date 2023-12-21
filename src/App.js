import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./screens/Home/Home";
import Rooms from "./screens/Rooms/Rooms";
import AuthUser from "./screens/Auth/AuthUser";
import Profile from "./screens/Profile/Profile";
import AuthAdmin from "./screens/Auth/AuthAdmin";
import Customers from "./screens/Admin/Customers";
import Transactions from "./screens/Admin/Transactions";
import RoomsAdmin from "./screens/Admin/RoomsAdmin";

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
