import React from 'react';
import './App.css'; // ✅ Keep this if you use styles here
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import Landing from './pages/Landing'; // adjust the path as needed

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;