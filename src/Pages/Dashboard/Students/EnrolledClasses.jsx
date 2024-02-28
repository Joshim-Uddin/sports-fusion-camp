import React, { useContext } from "react";
import useEnrolledClass from "../../../Hooks/useEnrolledClass";
import { AuthContext } from "../../../Providers/AuthProviders";

const EnrolledClasses = () => {
  const [enrolled, refetch] = useEnrolledClass();
  const {loading} = useContext(AuthContext)
  
  console.log(enrolled)
  return <div className="overflow-x-auto">
  <h2 className="uppercase text-2xl font-semibold text-center mb-4">
   Enrolled Classes
  </h2>

 {enrolled.error?<div>{`${enrolled.message}`}</div>:<table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Preview</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Class ID</th>
        <th>Paid</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {!loading && enrolled && enrolled?.map((myClass, index) => (
        <tr key={myClass._id}>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={myClass?.image}
                    alt="Basketball class image"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </td>
          <td>
            <div className="font-bold">{myClass.name}</div>
          </td>
          <td>{myClass.instructor}</td>
          <td>{myClass.classId}</td>
          <td>{`${myClass.paidStatus}`}</td>
        </tr>
      ))}
    </tbody>
  </table>
}
</div>;
};

export default EnrolledClasses;
