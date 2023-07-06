import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element=<Home/> exact />
     
      </Routes>
    </Router>
    </div>
  );
}

export default App;
