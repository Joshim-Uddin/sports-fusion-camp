import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  console.log(instructors);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-joshim-uddin-joshim-uddin.vercel.app/popularinstructor").then((res)=>res.json()).then(data=>setInstructors(data))
  }, []);
  return (
    <div className="bg-[#f8debc] py-8">
      <div className="w-11/12 md:w-10/12 mx-auto my-3">
      <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-6/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-8">
        Our Popular Instructor
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">{
        instructors.map((item, index)=><div key={index} className="card card-compact w-full bg-amber-600 shadow-xl mb-5 relative">
        <figure><img src={item.instructorImage} alt={`${item.name}'s image` } className="w-full h-64" /></figure>
        <div className="card-body text-center bg-amber-600 transition ease-in-out delay-100 hover:-translate-y-10 text-white rounded-b-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Name : {item.name}</h2>
          <p className="text-lg md:text-xl font-semibold">Email : {item.instructorEmail}</p>
          <div className="card-actions justify-center">
           <p>Best Instructor from different edges and their quality ensured here.</p>
          </div>
        </div>
      </div>)
        }</div>
      <div></div>
    </div>
    </div>
    
  );
};

export default PopularInstructors;
