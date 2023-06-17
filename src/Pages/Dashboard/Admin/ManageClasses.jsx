import React, { useEffect, useState } from "react";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a12-summer-camp-server-side-joshim-uddin-woad-phi.vercel.app/classes"
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [classes]);
  const handleApprove = (id) => {
    const status = { status: "approved" };
    fetch(
      `https://b7a12-summer-camp-server-side-joshim-uddin-woad-phi.vercel.app/classes/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(status),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="uppercase text-2xl font-semibold text-center mb-4">
        Manage Classes
      </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Preview</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th></th>
            <th></th>
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
              <td>{myClass.status}</td>
              <td>
                <button
                  onClick={() => handleApprove(myClass._id)}
                  className="btn btn-custom"
                  disabled={
                    myClass.status === "approved" || myClass.status === "denied"
                  }
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  className="btn btn-custom"
                  disabled={
                    myClass.status === "approved" || myClass.status === "denied"
                  }
                >
                  Deny
                </button>
              </td>
              <td>
                <button className="btn btn-custom">Feedback</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
