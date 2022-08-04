import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.js";
import Login from "./Components/Login/Login.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" index element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
