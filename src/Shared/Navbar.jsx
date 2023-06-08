import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const user = null;

  const handleSignOut = () => {};
  return (
    <>
      <nav className="max-[600px]:hidden flex items-center justify-between h-28 lg:px-16 px-8 bg-[#03203C] text-white">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h3 className="text-3xl font-semibold m-0 font-['logo']">
              Sports Fusion Camp
            </h3>
          </Link>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">Instructors</NavLink>
          <NavLink to="/blogs">Classes</NavLink>
          {user ? <NavLink to="/mytoys">Dashboard</NavLink> : ""}
          {user ? (
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
          ) : (
            ""
          )}
          {user ? (
            <button onClick={handleSignOut}>Log Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <div className="min-[600px]:hidden bg-[#03203C] text-white">
        <div className="flex justify-between items-center p-4">
          <FaBars onClick={() => setClicked(!clicked)} />
          <Link to="/">
            <h4 className="text-xl font-semibold font-['logo']">
              Sports Fusion Camp
            </h4>
          </Link>
        </div>
        <div
          className={
            clicked
              ? `flex flex-col items-start gap-2 ps-4 relative top-0 left-0 pb-3`
              : `flex flex-col gap-2 ps-4 absolute -top-64`
          }
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/alltoys">All Toys</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          {user ? <NavLink to="/mytoys">My Toys</NavLink> : ""}
          {user ? <NavLink to="/addtoy">Add a Toy</NavLink> : ""}
          {user ? (
            <div className="tooltip tooltip-right" data-tip={user.displayName}>
              <img
                src={user?.photoURL}
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
          ) : (
            ""
          )}
          {user ? (
            <button onClick={handleSignOut}>Log Out</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
