import React from "react";
import campIdea from "./../assets/campidea.jpg";
import { Parallax } from "react-parallax";

const CampIdea = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={campIdea}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="h-screen flex flex-col items-center justify-center">
          <h3 className="text-3xl shadow-lg shadow-blue-400 bg-blend-overlay font-bold text-center text-[#422C18] bg-amber-400 w-11/12 py-10">
            Learn More About Sports Fusion Camp
          </h3>
        </div>
      </Parallax>
    </>
  );
};

export default CampIdea;
