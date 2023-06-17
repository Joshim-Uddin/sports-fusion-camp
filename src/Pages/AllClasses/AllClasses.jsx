import { data } from "autoprefixer";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useUsers from "../../Hooks/useUsers";
import { AuthContext } from "../../Providers/AuthProviders";
import useSelectedClasses from "../../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const [, refetch] = useSelectedClasses();
  const role = useUsers();
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-joshim-uddin-woad-phi.vercel.app/classes"
    )
      .then((response) => response.json())
      .then((data) => {
        const approvedClass = data.filter((item) => item.status === "approved");
        setClasses(approvedClass);
      });
  }, []);
  const handleSelect = (classItem) => {
    const email = user?.email;
    const { _id, className, classImage, instructorName, price, seats } =
      classItem;
    const selected = {
      classId: _id,
      email,
      className,
      classImage,
      instructorName,
      price,
      seats,
    };
    fetch(
      `https://b7a12-summer-camp-server-side-joshim-uddin-woad-phi.vercel.app/selectclass`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selected),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Failed") {
          Swal.fire({
            icon: "error",
            title: "Class Already Selected",
          });
        } else if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Class Selected Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto my-5">
      <h2 className="text-3xl text-center font-semibold">Book from Classes</h2>
      <div className="grid md:grid-cols-3 gap-4 my-5">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={
              classItem.seats == 0
                ? `card w-full bg-red-500 shadow-xl`
                : `card w-full bg-base-100 shadow-xl`
            }
          >
            <figure className="md:px-5 px-2 pt-5">
              <img
                src={classItem.classImage}
                alt="Shoes"
                className="rounded-xl h-48 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{classItem.className}</h2>
              <p>Instructor : {classItem.instructorName}</p>
              <div className="flex flex-col md:flex-row justify-around items-center md:gap-10 gap-2">
                <p>Available seats : {classItem.seats}</p>
                <p>Price : $ {classItem.price}</p>
              </div>
              <div className="card-actions">
                <button
                  className="btn btn-custom"
                  disabled={
                    classItem.seats == 0 ||
                    role === "admin" ||
                    role === "instructor"
                  }
                  onClick={() => handleSelect(classItem)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
