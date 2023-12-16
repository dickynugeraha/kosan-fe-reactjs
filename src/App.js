import "./App.css";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
