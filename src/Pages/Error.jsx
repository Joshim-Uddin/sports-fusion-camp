import React from "react";
import errorImg from "./../assets/error.jpg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="h-screen py-2 flex flex-col items-center">
      <img src={errorImg} alt="" className="w-8/12 mx-auto h-3/4" />
      <Link to="/">
        <button className="btn btn-custom">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
