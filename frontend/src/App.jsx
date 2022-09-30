import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material"
import { useAuthContext } from "./hooks/useAuthContext"

import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import AdminP from "./components/pages/AdminP";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";





function App() {
  const { admin } = useAuthContext()

  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={!admin ? <Login /> : <Navigate to="/adminP" />} />
        <Route path="/adminP" element={admin ? <AdminP /> : <Navigate to="/projects" />} />

      </Routes>


      <Routes>
        <Route path="*" element={<Footer />} />
      </Routes>
    </>
  );

}

export default App;
