import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home"
import Service from "./Pages/Service"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  return <>
    <BrowserRouter>

    {/* 
        link1,link2,link3,link4 is Name of Link Which Displayed In Navbar
        connectlink1,connectlink2,connectlink3,connectlink4 is <Link to=" should be filled"/> link to pages 

    */}
    <Navbar
        link1="Home"
        connectlink1="/"

        link2="Service"
        connectlink2="/service"

        link3="Contact"
        connectlink3="/contact"

        link4="About"
        connectlink4="/about"
    />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>

}

export default App;
