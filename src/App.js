import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Rooms from "./screens/Rooms/Rooms";
import AuthUser from "./screens/Auth/AuthUser";
import Profile from "./screens/Profile/Profile";
import AuthAdmin from "./screens/Auth/AuthAdmin";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
