import React from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center">This is Popular classes</h2>
      <div className="text-center">
        <Link to="/allclasses">
          <button className="btn btn-custom">Book Class</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
