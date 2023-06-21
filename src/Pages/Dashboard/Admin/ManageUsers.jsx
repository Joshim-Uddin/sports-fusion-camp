import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch("https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [state]);
  const makeAdmin = (email) => {
    const admin = { role: "admin" };
    fetch(
      `https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/user?email=${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
        },
        body: JSON.stringify(admin),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setState(true);
        }
      });
  };
  const makeInstructor = (email) => {
    const instructor = { role: "instructor" };
    fetch(
      `https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/user?email=${email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("fusion-camp")}`,
        },
        body: JSON.stringify(instructor),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setState(true);
        }
      });
  };

  return (
    <div>
      <h2 className="uppercase text-2xl font-semibold text-center mb-4">
        Manage users
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => makeAdmin(user?.email)}
                    className="btn btn-custom"
                    disabled={user?.role == "admin"}
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-custom"
                    onClick={() => makeInstructor(user?.email)}
                    disabled={
                      user?.role == "admin" || user?.role == "instructor"
                    }
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
