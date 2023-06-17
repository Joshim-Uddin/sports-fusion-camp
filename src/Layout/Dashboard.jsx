import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import useUsers from "../Hooks/useUsers";

//TODO: private route
const Dashboard = () => {
  const role = useUsers();

  const options =
    role === "admin" ? (
      <>
        <li>
          <Link to="classes">Manage Classes</Link>
        </li>
        <li>
          <Link to="users">Manage Users</Link>
        </li>
      </>
    ) : role === "instructor" ? (
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
          <Link to="selected">My Selected Classes</Link>
        </li>
        <li>
          <Link to="enrolled">Enrolled Classes</Link>
        </li>
      </>
    );

  const fixedOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-5 items-center justify-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button mb-2 lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side w-1/3">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 h-full bg-indigo-400 text-white flex flex-col gap-2">
          {/* Sidebar content here */}
          {options}
          <div className="divider bg-white h-[2px] md:w-full w-/3/4"></div>
          {fixedOptions}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
