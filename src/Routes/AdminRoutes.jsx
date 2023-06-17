import React from "react";
import useUsers from "../Hooks/useUsers";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const role = useUsers();
  if (role === "admin") {
    return children;
  }
  <Navigate to="/"></Navigate>;
};

export default AdminRoutes;
