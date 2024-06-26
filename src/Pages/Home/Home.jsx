import React from "react";
import Banner from "./Banner/Banner";
import PopularClasses from "../PopularClasses";
import PopularInstructors from "../PopularInstructors";
import CounterSection from "./Counter/CounterSection";
import CountDown from "../Countdown";
import CampIdea from "../CampIdea";
import Contact from "./Contact";
import Sponsor from "./Sponsor";
import Review from "./ReviewSection";


const Home = () => {
  return (
    <div>
      <Banner />
      <CountDown />
      <PopularClasses />
      <CampIdea />
      <PopularInstructors />
      <CounterSection />
      <Sponsor />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
