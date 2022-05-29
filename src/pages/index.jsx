import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './dashboard';
import About from './about';
// import your route components too

const AllRoutes = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
};

export default AllRoutes;