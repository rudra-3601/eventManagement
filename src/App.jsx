import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./pages/Login";
import Hero from "./pages/Hero";
import './App.css'
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Footer/>
     
    </Router>
  );
};

export default App;
