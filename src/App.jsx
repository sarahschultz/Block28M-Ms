import React from 'react'
import { Routes, Route } from "react-router-dom";

import Blue from "./Components/Blue"
import Red from "./Components/Red"
import Green from "./Components/Green"
import Yellow from "./Components/Yellow"
import Home from "./Components/Home"
import Nav from "./Components/Nav"

import "./index.css";

function App() {
  return (
    <div id="container">
      <h1>M&M Color Switcher</h1>
      <Nav />
      <div id="main-section">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Blue" element={<Blue />} />
          <Route path="/Red" element={<Red />} />
          <Route path="/Yellow" element={<Yellow />} />
          <Route path="/Green" element={<Green />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
