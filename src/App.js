import React, { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';

import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar'
import AdminPage from './pages/Admin/Admin'
import AgentPage from './pages/Agent/Agent'
import WarrantPage from './pages/Warrant/Warrant'
import FactoryPage from './pages/Factory/Factory'

function App() { 

  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Navbar/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/factory" element={<FactoryPage/>} />
        <Route path="/agent" element={<AgentPage/>} />
        <Route path="/warrant" element={<WarrantPage/>} />

      </Routes>
    </div>
  );
}

export default App;
