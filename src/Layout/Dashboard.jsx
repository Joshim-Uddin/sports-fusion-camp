import { Link, Outlet, useLocation } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft, FaHome, FaHouseUser, FaRegEdit, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdClass, MdAdminPanelSettings, MdEngineering, MdAssignmentAdd, MdFeedback } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


//TODO: private route
const Dashboard = () => {
  const role = useUsers();
  const {open, setOpen} = useContext(AuthContext)
  console.log(open)
  const options =
    role === "admin" ? (
      <>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to=""><MdAdminPanelSettings className="text-xl"/> <span className={`${!open?'hidden':''}`}>Admin Home</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="classes"><MdClass className="text-xl"/> <span className={`${!open?'hidden':''}`}>Manage Classes</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="users"><FaUsers className="text-xl"/> <span className={`${!open?'hidden':''}`}>Manage Users</span></Link>
        </li>
      </>
    ) : role === "instructor" ? (
      <>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to=""><MdEngineering className="text-xl"/> <span className={`${!open?'hidden':''}`}>Instructor Home</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="addclass"><MdAssignmentAdd className="text-xl"/> <span className={`${!open?'hidden':''}`}>Add a Class</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="myclass"><MdClass className="text-xl"/> <span className={`${!open?'hidden':''}`}>My Classes</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="myclass"><FaUserGraduate className="text-xl"/> <span className={`${!open?'hidden':''}`}>Enrolled Students</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="myclass"><MdFeedback className="text-xl"/> <span className={`${!open?'hidden':''}`}>Feedback</span></Link>
        </li>
      </>
    ) : (
      <>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center "  to=""><FaHouseUser className="text-xl"/> <span className={`${!open?'hidden':''}`}>User&apos;s Home</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="selected"><MdClass className="text-xl"/> <span className={`${!open?'hidden':''}`}>My Classes</span></Link>
        </li>
        <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
          <Link className="flex  gap-x-3 items-center " to="enrolled"><FaRegEdit className="text-xl"/> <span className={`${!open?'hidden':''}`}>Enrolled Classes</span></Link>
        </li>
      </>
    );

  const fixedOptions = (
    <>
      <li className="hover:bg-[#7A0027] hover:text-white rounded-md">
        <Link className="flex  gap-x-3 items-center " to="/"><FaHome className="text-xl"/> <span className={`${!open?'hidden':'max-[600px]:hidden'}`}>Home</span></Link>
      </li>
    </>
  );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-5 items-center ">
        {/* Page content here */}
       
        <Outlet/>
      </div>

      <div className={`h-screen bg-indigo-800 duration-200  text-white relative ${open?'w-64':'w-20'}`}>
            <div className="absolute top-20 -right-4 cursor-pointer text-white text-xl p-2 w-10 h-10 flex  items-center outline outline-1 outline-white rounded-full bg-[#645DF6]" onClick={()=>setOpen(!open)}>
            {open?<FaArrowLeft />:<HiBars3BottomLeft />}
            </div>
            <div className={`flex gap-x-5 justify-start items-center min-h-[60px] ${open?'bg-[#444677]':''} ps-5`}>
                <img src='' alt="higher healthcare logo" className="w-10"  />
            </div>

            <ul className="flex flex-col items-center pt-20">
            {options}
            <div className="divider bg-white h-[2px] md:w-full w-/3/4"></div>
          {fixedOptions}
            </ul>

            <div className="rounded-full bg-[#645DF6] cursor-pointer outline outline-1 outline-white p-2 w-8 h-8 flex items-center absolute bottom-4 left-5">
                <p className="text-xl">JK</p>
            </div>
        </div>
      {/* <div className="drawer-side md:w-1/3 w-3/5">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-indigo-800 text-white text-lg flex flex-col gap-2 pt-8">
          
          {options}
          <div className="divider bg-white h-[2px] md:w-full w-/3/4"></div>
          {fixedOptions}
        </ul>
      </div> */}
    </div>
  );
};

export default Dashboard;
