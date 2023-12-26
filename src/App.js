import Footer from "./components/teams-component/GDSC-NEW/Footer"
import Hero from "./components/teams-component/GDSC-NEW/Hero"
import Navbar from "./components/teams-component/GDSC-NEW/Navbar"
import React from "react";
import RouterMain from "./router";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";

export default function App() {
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