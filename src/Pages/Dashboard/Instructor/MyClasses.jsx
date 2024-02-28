import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/instructorclasses?email=${user?.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Preview</th>
            <th>Class Name</th>
            <th>Enrolled Students</th>
            <th>Status</th>
            <th>Feedback</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((myClass, index) => (
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
              <td>{myClass.seats - myClass.seats}</td>
              <td>
                <button className="btn btn-ghost btn-xs">
                  {myClass.status}
                </button>
              </td>
              <td>{myClass.feedback ? myClass.feedback : ""}</td>
              <td>
                <button className="btn btn-custom">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
