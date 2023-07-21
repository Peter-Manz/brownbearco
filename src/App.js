import React from 'react';  
import './App.css';
import Home from './Components/Home.js';
import Menus from './Components/Menus.js';
import Story from './Components/Story.js';
import Visit from './Components/Visit.js';
import Footer from './Components/Footer.js';
import Navbar from './Components/Navbar.js';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
      
        <Routes>
          <Route index element={<Home />} />
          <Route path="menus" element={<Menus />} />
          <Route path="story" element={<Story />} />
          <Route path="visit" element={<Visit />} />
        </Routes>
                
        <Footer />

      </div>
    </BrowserRouter>
  );
}


