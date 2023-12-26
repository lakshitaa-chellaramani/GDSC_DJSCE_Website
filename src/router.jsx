import Footer from "./components/home/Footer"
import Hero from "./components/home/Hero"
import Navbar from "./components/home/Navbar"
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";

export default function RouterMain() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/aboutus" element={<AboutUs/>} />
    <Route path="/events" element={<Events/>} />
    <Route path="/gallery" element={<Gallery/>} />
    <Route path="/team" element={<Team/>} />
    <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}