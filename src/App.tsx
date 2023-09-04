// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Login from "./components/login/login";
import HomePage from "./components/HomePage/HomePage";
// import Sidebar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <React.StrictMode >
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/home" element = {<HomePage />} />
      </Routes>
    </Router>
      {/* <Login /> */}
      
    </>
    </ React.StrictMode>
  );
}

export default App;
