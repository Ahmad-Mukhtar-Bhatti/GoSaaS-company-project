// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from "./components/login/login";
import ApplicationsBar from "./components/applications_slider/ApplicationsBar";
import Sidebar from "./components/SideBar/SideBar";


function App() {
  return (
    <>
      {/* <Login /> */}
      <Sidebar />
      <ApplicationsBar />
      
    </>
  );
}

export default App;
