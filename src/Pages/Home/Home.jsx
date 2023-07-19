import React from "react";
import Banner from "./Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";
import CounterSection from "./Counter/CounterSection";
import CountDown from "../Countdown";
import CampIdea from "../CampIdea";


const Home = () => {
  return (
    <div>
      <Banner />
      <CountDown />
      <PopularClasses />
      <CampIdea />
      <PopularInstructors />
      <CounterSection />
    </div>
  );
};

export default Home;
