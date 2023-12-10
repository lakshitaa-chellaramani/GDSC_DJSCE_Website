import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Team from "./pages/Team";
import Events from "./pages/Events";

const RouterMain = () => {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/events" element={<Events/>} />

        </Routes>
      </div>
    </Router>
    </>
  );
};

export default RouterMain;
