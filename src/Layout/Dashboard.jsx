import { Link, Outlet, useLocation } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import { FaHome, FaHouseUser, FaRegEdit, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdClass, MdAdminPanelSettings, MdEngineering, MdAssignmentAdd, MdFeedback } from "react-icons/md";


//TODO: private route
const Dashboard = () => {
  const role = useUsers();
  const options =
    role === "admin" ? (
      <>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to=""><MdAdminPanelSettings /> Admin Home</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="classes"><MdClass /> Manage Classes</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link className="active:text-red-700" to="users"><FaUsers /> Manage Users</Link>
        </li>
      </>
    ) : role === "instructor" ? (
      <>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to=""><MdEngineering /> Instructor Home</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="addclass"><MdAssignmentAdd /> Add a Class</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="myclass"><MdClass /> My Classes</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="myclass"><FaUserGraduate /> Enrolled Students</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="myclass"><MdFeedback /> Feedback</Link>
        </li>
      </>
    ) : (
      <>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to=""><FaHouseUser /> User&apos;s Home</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="selected"><MdClass /> My Classes</Link>
        </li>
        <li className="hover:bg-white hover:text-indigo-800 rounded-md">
          <Link to="enrolled"><FaRegEdit /> Enrolled Classes</Link>
        </li>
      </>
    );

  const fixedOptions = (
    <>
      <li className="hover:bg-white hover:text-indigo-800 rounded-md">
        <Link className="" to="/"><FaHome /> Home</Link>
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
       
        <Outlet/>
      </div>
      <div className="drawer-side w-1/3">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-indigo-800 text-white text-lg flex flex-col gap-2">
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
