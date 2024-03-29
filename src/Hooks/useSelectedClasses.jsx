import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useSelectedClasses = () => {
  const {user } = useContext(AuthContext);
  const {
    status,
    data: selected = [],
    refetch,
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
    },
  });
  
  return [selected, refetch];
  
};

export default useSelectedClasses;
