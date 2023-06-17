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
        `http://localhost:5000/enrolledclass?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [enrolled, refetch];
};

export default useEnrolledClass;
