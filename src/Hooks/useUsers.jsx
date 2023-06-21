import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";

const useUsers = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(
      `https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/user?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setRole(data?.role))
      .catch((err) => err);
  }, [user]);
  return role;
};

export default useUsers;
