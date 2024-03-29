import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const {user, loading } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure()
  const {
    status,
    refetch,
    data: selected = [],
    
  } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn:  async () => {
      const res= await axiosSecure.get(`/selectclass?email=${user?.email}`)
      return res.data;
    },
  });
  
  return [selected, refetch];
  
};

export default useSelectedClasses;
