import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const isAdmin = false;
  const isInstructor = true;
  const options = isAdmin ? (
    <>
      <li>
        <Link to="classes">Manage Classes</Link>
      </li>
      <li>
        <Link to="users">Manage Users</Link>
      </li>
    </>
  ) : isInstructor ? (
    <>
      <li>
        <Link to="addclass">Add a Class</Link>
      </li>
      <li>
        <Link to="myclass">My Classes</Link>
      </li>
      <li>
        <Link to="myclass">Enrolled Students</Link>
      </li>
      <li>
        <Link to="myclass">Feedback</Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="classes">My Classes</Link>
      </li>
      <li>
        <Link to="users">Modify Classes</Link>
      </li>
    </>
  );

  const fixedOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="users">Manage Users</Link>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col gap-2">
          {/* Sidebar content here */}
          {options}
          <div className="divider"></div>
          {fixedOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
