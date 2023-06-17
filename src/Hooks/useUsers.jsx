import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useState } from "react";
import { useEffect } from "react";

const useUsers = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState("");
  useEffect(() => {
    fetch(`http://localhost:5000/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data?.role))
      .catch((err) => err);
  }, [user]);
  return role;
};

export default useUsers;
