import React, { useEffect, useState } from "react";
import { FaBeer, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/popularinstructor").then((res)=>res.json()).then(data=>setInstructors(data))
  }, []);
  return (
    <div className="bg-[#f8debc] py-8">
      <div className="w-11/12 md:w-10/12 mx-auto my-3">
      <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-6/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-8">
        Our Popular Instructor
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4 pt-10">{
        instructors.map((item, index)=><div key={index} className="mb-5 p-5 hover:bg-white hover:shadow-lg rounded-lg">
        <figure><img src={item.instructorImage} alt={`${item.name}'s image` } className="w-52 mx-auto h-52 rounded-full" /></figure>
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center pt-5">{item.name}</h2>
          <div className="flex gap-5 items-center justify-center pt-5">
            <a href="#"><FaFacebook  className="text-2xl"/></a>
            <a href="#"><FaLinkedin  className="text-2xl"/></a>
            <a href="#"><FaTwitter  className="text-2xl"/></a>
          </div>
          <div className="card-actions justify-center">
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
