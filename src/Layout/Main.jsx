import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Outlet />
      {location.pathname === "/login" || location.pathname === "/signup" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Main;
