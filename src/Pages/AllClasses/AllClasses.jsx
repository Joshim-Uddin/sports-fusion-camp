import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((response) => response.json())
      .then((data) => {
        const approvedClass = data.filter((item) => item.status === "approved");
        setClasses(approvedClass);
      });
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl text-center font-semibold">Book from Classes</h2>
      <div className="grid md:grid-cols-3 gap-4 my-5">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure className="px-5 pt-5">
              <img
                src={classItem.classImage}
                alt="Shoes"
                className="rounded-xl h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{classItem.className}</h2>
              <p>Instructor&apos;s Name: {classItem.instructorName}</p>
              <div className="flex justify-around items-center gap-10">
                <p>Available seats: {classItem.seats}</p>
                <p>Price : $ {classItem.price}</p>
              </div>
              <div className="card-actions">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
