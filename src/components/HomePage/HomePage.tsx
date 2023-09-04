import React from "react";
import SideBar from "../SideBar/SideBar";
import ApplicationsBar from "../applications_slider/ApplicationsBar";
import Navbar from "../Navbar/NavBar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SideBar />
      <ApplicationsBar />
    </>
  );
};

export default HomePage;
