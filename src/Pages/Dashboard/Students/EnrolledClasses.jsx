import React from "react";
import useEnrolledClass from "../../../Hooks/useEnrolledClass";

const EnrolledClasses = () => {
  const [enrolled, refetch] = useEnrolledClass();

  //   console.log(Id);
  return <div>{enrolled.length}</div>;
};

export default EnrolledClasses;
