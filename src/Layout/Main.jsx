import React, { useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { AuthContext } from "../Providers/AuthProviders";

const Main = () => {
  const {night} = useContext(AuthContext)
  Aos.init();
  const location = useLocation();
  return (
    <div className={night?"bg-[#03203C] text-[#F2613F]":"bg-[#F1F5F9] text-black"}>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;
