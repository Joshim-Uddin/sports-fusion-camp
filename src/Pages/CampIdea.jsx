import React from "react";
import campIdea from "./../assets/campidea.jpg";
import { Parallax } from "react-parallax";

const CampIdea = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={campIdea}
        bgImageAlt="campeign Idea"
        strength={-200}
      >
        <div className="md:h-[700px] h-[400px] flex flex-col items-center justify-center">
          <h3 className="md:text-3xl text-2xl shadow-lg shadow-blue-400 bg-blend-overlay font-bold text-center text-[#422C18] bg-amber-400 w-11/12 py-10">
            Sports Fusion Camp is a perfect camp program
          </h3>
        </div>
      </Parallax>
    </>
  );
};

export default CampIdea;
