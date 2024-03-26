import React from "react";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Enroll = () => {
  const { user } = useContext(AuthContext);
  const [selected] = useSelectedClasses();
  const id = useParams();
  const payable = selected?.find((item) => item?._id === id?.id);
  console.log(payable)
  const handlePayment = () => {
    fetch(
      `http://localhost:5000/enroll`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payable),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
      });
  };
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={payable?.classImage} alt="class Image" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center">
          <h2 className="card-title">{payable?.className}</h2>
          <p className="text-lg">{payable?.instructorName}</p>
          <div className="card-actions justify-end">
            <p className="text-lg">Price: $ {payable?.price}</p>
          </div>
          <div>
            <Link to='/dashboard/pay'>
            <button className="btn btn-custom">
              Pay
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
