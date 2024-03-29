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
      return res.data;
    },
  });
  return [enrolled, refetch];
};

export default useEnrolledClass;
