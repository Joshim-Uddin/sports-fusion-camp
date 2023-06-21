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
<<<<<<< HEAD
      <div></div>
=======
      <div>
        
      </div>
>>>>>>> 53b56f12ef49d6fddb192e34f8e09e308ac47958
    </div>
  );
};

export default PopularInstructors;
