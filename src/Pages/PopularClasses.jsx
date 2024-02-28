import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUsers from "../Hooks/useUsers";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState();
  const role = useUsers()
  useEffect(() => {
    fetch(
      "http://localhost:5000/popularclasses"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);
  return (
    <>
    <div className="w-11/12 md:w-10/12 mx-auto my-12 py-3">
      <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-5/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-5">
        Our Popular Class
      </h2>
      <div className="grid md:grid-cols-3 grid-col-1 gap-3">
        {popularClasses?.map((item) => (
          <div
            key={item._id}
            className="card card-compact w-full bg-base-100 shadow-xl mt-3"
          >
            <figure>
              <img
                src={item.classImage}
                alt="class image"
                className="h-52 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.className}</h2>
              <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
                <p>Instructor : {item.instructorName}</p>
                <p>Students : {item.students}</p>
              </div>
              <div className="card-actions justify-center mt-2">
                {role==='admin'?<Link to="/dashboard/classes">
                  <button className="btn btn-primary">Manage Class</button>
                </Link>:<Link to="/allclasses">
                  <button className="btn btn-primary">Book Now</button>
                </Link>}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/allclasses">
          <button className="btn btn-custom">See All</button>
        </Link>
      </div>
    </div>
    
    </>
  );
};

export default PopularClasses;
