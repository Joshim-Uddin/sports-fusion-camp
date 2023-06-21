import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useEnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const {
    status,
    data: enrolled = [],
    refetch,
  } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/enrolledclass?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [enrolled, refetch];
};

export default useEnrolledClass;
