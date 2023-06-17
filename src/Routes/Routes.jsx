import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Instructors from "../Pages/Instructors";
import Dashboard from "../Layout/Dashboard";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import PopularClasses from "../Pages/PopularClasses";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import SelectedClasses from "../Pages/Dashboard/Students/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/Students/EnrolledClasses";
import Enroll from "../Pages/Dashboard/Students/Enroll";
import PaymentSuccess from "../Pages/Dashboard/Students/PaymentSuccess";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/popularclass",
        element: <PopularClasses />,
      },
      {
        path: "/allclasses",
        element: (
          <PrivateRoutes>
            <AllClasses />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "classes",
        element: (
          <AdminRoutes>
            <ManageClasses />
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "myclass",
        element: <MyClasses />,
      },
      {
        path: "selected",
        element: <SelectedClasses />,
      },
      {
        path: "enrolled",
        element: <EnrolledClasses />,
      },
      {
        path: "enroll/:id",
        element: <Enroll />,
      },
      {
        path: "selected/:id",
        element: <PaymentSuccess />,
      },
    ],
  },
]);
const Routes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
