import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        L{" "}
        <div className="border-[5px] border-dashed animate-spin h-12 w-12 rounded-full"></div>{" "}
        ading
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location}></Navigate>;
};

export default PrivateRoutes;
