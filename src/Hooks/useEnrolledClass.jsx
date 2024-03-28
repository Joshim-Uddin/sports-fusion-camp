import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const {
    status,
    refetch,
    data: enrolled=[],
  } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolledclass?email=${user?.email}`);
      console.log(res.data)
      return res.data;
      // const res = await fetch(
      //   `http://localhost:5000/enrolledclass?email=${user?.email}`,
      //   {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
      //     },
      //   }
      // );
      // return res.json();
    },
  });
  return [enrolled, refetch];
};

export default useEnrolledClass;
