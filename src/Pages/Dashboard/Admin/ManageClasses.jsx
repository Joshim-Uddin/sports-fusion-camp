import React, { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
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
          {classes.map((myClass, index) => (
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
              <td>{myClass.email}</td>
              <td>{myClass.seats}</td>
              <td>{myClass.price}</td>
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

export default ManageClasses;
