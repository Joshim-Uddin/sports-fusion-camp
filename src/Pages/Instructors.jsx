import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Instructors = () => {
  const { user } = useContext(AuthContext);
  const {
    status,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users`
      );
      return res.json();
    },
  });
  const instructors = users.filter(user=>user.role==="instructor")
  return <div className="md:w-10/12 mx-auto w-11/12 py-10">
    <h2 className="text-center md:border-b-8 border-b-4 border-amber-600 border-dashed md:w-5/12 mx-auto pb-5 text-3xl md:text-5xl font-['Caprasimo'] font-bold text-[#422C18] my-5">
    All Instructor Here
      </h2>
    <h3 className="text-center text-3xl font-semibold py-5"></h3>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mt-8">
      {instructors.map(instructor=><div key={instructor._id} className="mb-5 p-5 bg-white shadow-lg rounded-lg">
        <figure><img src={instructor.image} alt={`${instructor.name}'s image` } className="w-52 mx-auto h-52 rounded-full" /></figure>
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center pt-5">{instructor.name}</h2>
          <div className="flex gap-5 items-center justify-center pt-5">
            <a href="#"><FaFacebook  className="text-2xl"/></a>
            <a href="#"><FaLinkedin  className="text-2xl"/></a>
            <a href="#"><FaTwitter  className="text-2xl"/></a>
          </div>
        </div>
      </div>)
      }
    </div>
  </div>;
};

export default Instructors;
