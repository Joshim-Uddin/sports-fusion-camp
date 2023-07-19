import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-joshim-uddin-joshim-uddin.vercel.app/popularinstructor").then((res)=>res.json()).then(data=>setInstructors(data))
  }, []);
  return (
    <div className="w-10/12 mx-auto my-3">
      <h2 className="text-3xl font-semibold text-center my-4">
        Our Popular Instructor
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">{
        instructors.map((item, index)=><div key={index} className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img src={item.instructorImage} alt={`${item.name}'s image` } className="h-36 w-36 rounded-full" /></figure>
        <div className="card-body text-center">
          <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
          <p>{item.instructorEmail}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Know More</button>
          </div>
        </div>
      </div>)
        }</div>
      <div></div>
    </div>
  );
};

export default PopularInstructors;
