import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>footers</footer>
    </>
  );
};

export default PrimaryLayout;
