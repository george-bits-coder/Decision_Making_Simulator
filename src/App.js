import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Basicfun from "./Home";
import Userlist from "./Users.js";
import Decisions from "./Possibilities.js";
import Navbar from "./Navbar.js";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Basicfun />}></Route>
        <Route path="/possibilities:id" element={<Decisions />}></Route>
        <Route path="/Users" element={<Userlist />}></Route>
        <Route path="*" element={<div>404</div>}></Route>
      </Routes>
    </div>
  );
}
