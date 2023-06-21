import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState();
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/popularclasses"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);
  return (
    <div className="w-10/12 mx-auto my-12">
      <h2 className="text-center text-3xl font-semibold my-5">
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
                <Link to="/allclasses">
                  <button className="btn btn-primary">Book Now</button>
                </Link>
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
  );
};

export default PopularClasses;
