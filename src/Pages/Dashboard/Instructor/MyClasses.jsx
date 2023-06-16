import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/instructorclasses?email=${user.email}`);
  }, [user.email]);
  return <div></div>;
};

export default MyClasses;
