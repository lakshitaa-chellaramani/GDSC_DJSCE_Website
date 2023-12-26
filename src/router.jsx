import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Team from "./pages/Team";
import Events from "./pages/Events";
import GallerPage from './pages/GallerPage';

const RouterMain = () => {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/event" element={<AboutUs/>} />
          <Route path="/gallery" element={<Team/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default RouterMain;
