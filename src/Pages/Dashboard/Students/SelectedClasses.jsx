import React from "react";
import useSelectedClasses from "../../../Hooks/useSelectedClasses";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const SelectedClasses = () => {
  const [selected, refetch] = useSelectedClasses();
  const transId = useParams();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Want to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/selectclass/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };
  const handlePay = (id) => {
    // fetch(`https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/selectclass/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.deletedCount > 0) {
    //       refetch();
    //     }
    //   });
  };

  return (
    <div className="overflow-x-auto">
      <h2 className="uppercase text-2xl font-semibold text-center mb-4">
        Manage Selected Classes
      </h2>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Preview</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Seats</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selected?.map((myClass, index) => (
            <tr key={myClass._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myClass?.classImage}
                        alt="Basketball class image"
                      />
                    </div>
                  </div>
                  <div></div>
                </div>
              </td>
              <td>
                <div className="font-bold">{myClass.className}</div>
              </td>
              <td>{myClass.instructorName}</td>
              <td>{myClass.seats}</td>
              <td>{myClass.price}</td>
              <td>
                <Link to={`/dashboard/enroll/${myClass._id}`}>
                  <button
                    className="btn btn-custom"
                    onClick={() => handlePay(myClass._id)}
                  >
                    Pay
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-custom"
                  onClick={() => handleDelete(myClass._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClasses;
