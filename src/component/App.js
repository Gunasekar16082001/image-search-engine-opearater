import React from "react";

import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
