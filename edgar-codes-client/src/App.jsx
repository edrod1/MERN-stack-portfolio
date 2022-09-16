
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import { Box, CssBaseline, Container } from "@mui/material"


function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Routes>
        <Route path="*" element={<Footer />} />
      </Routes>
    </>
  );

}

export default App;
