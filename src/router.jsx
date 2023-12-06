import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/aboutUs';
import Team from "./pages/Team";

const RouterMain = () => {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default RouterMain;
