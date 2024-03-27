import { Link, Outlet, useLocation } from "react-router-dom";
import useUsers from "../Hooks/useUsers";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft, FaBars, FaHome, FaHouseUser, FaRegEdit, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdClass, MdAdminPanelSettings, MdEngineering, MdAssignmentAdd, MdFeedback } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import logo from "../assets/white.png"


//TODO: private route
const Dashboard = () => {
  const role = useUsers();
  const {open, setOpen} = useContext(AuthContext)
  const [clicked, setClicked] = useState(false)
  console.log(clicked)
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
        <Link className="flex  gap-x-3 items-center " to="/"><FaHome className="text-xl"/> <span className={`${!open?'hidden':''}`}>Home</span></Link>
      </li>
    </>
  );
  return (
    <div className="md:drawer lg:drawer-open">
      <>
      <div className={`md:hidden bg-indigo-800 duration-200 text-white flex justify-between items-center relative px-2`}>            
                <Link to='/'>
                <img src={logo} alt="sports fusion camp logo" className='w-24'  />
                </Link>
                <div className="flex flex-col relative">
                <FaBars onClick={()=>setClicked(!clicked)}/>
            
                </div>
                
                
        </div>
        <ul className={`${!clicked?'flex flex-col items-center absolute  -mt-[500px] md:hidden': 'relative md:hidden bg-indigo-800 text-white -mt-2'}`}>
            {options}
            <div className="h-2 bg-blue-400"></div>
          {fixedOptions}
            </ul>
      </>
      <div className="md:drawer-content md:flex md:flex-col gap-5 items-center pt-5 ">
        {/* Page content here */}
       
        <Outlet/>
      </div>

      
      <div className={`h-screen bg-indigo-800 duration-200 text-white max-[600px]:hidden relative ${open?'w-64':'w-20'}`}>
            <div className="absolute top-20 -right-4 cursor-pointer text-white text-xl p-2 w-10 h-10 flex  items-center outline outline-1 outline-white rounded-full bg-[#645DF6]" onClick={()=>setOpen(!open)}>
            {open?<FaArrowLeft />:<HiBars3BottomLeft />}
            </div>
            
                <Link to='/'>
                <img src={logo} alt="sports fusion camp logo" className={`${!open?'pt-2':'mx-auto pt-2'}`}  />
                </Link>
            

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
