import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const {user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  console.log(user)
  const {
    status,
    refetch,
    data: selected = [],
    
  } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn:  async () => {
       const res = await fetch(
        `http://localhost:5000/selectclass?email=${user?.email&&user.email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("fusion-camp")}`,
          },
        }
      );
      return res.json();
      // const res= await axiosSecure.get(`/selectclass?email=${user&&user?.email}`)
      // return res.data;
    },
  });
  
  return [selected, refetch];
  
};

export default useSelectedClasses;
