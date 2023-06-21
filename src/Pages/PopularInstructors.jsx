import React, { useEffect } from "react";

const PopularInstructors = () => {
  useEffect(() => {
    fetch("http://localhost:5000/popularinstructor");
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center">
        Our Popular Instructor
      </h2>
      <div></div>
      =======
      <div></div>
    </div>
  );
};

export default PopularInstructors;
