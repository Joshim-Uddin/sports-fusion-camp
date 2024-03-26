import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProviders";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const getFormData = (data) => {
    const { className, classImage, instructorName, email, seats, price } = data;
    const myClass = {
      className,
      classImage,
      instructorName,
      email,
      seats: parseInt(seats),
      price: parseFloat(price),
      status: "pending",
      students: 0
    };
    fetch(
      "http://localhost:5000/addclass",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(myClass),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };
  return (
    <div className="AddClassForm md:my-2">
      <div className="hero md:px-8">
        <div className="hero-content md:max-w-[640px] w-full shadow-2xl shadow-slate-600 flex ">
          <div className="card flex-shrink-0 w-full  bg-white bg-blend-overlay">
            <h1 className="text-3xl font-bold text-center pt-3 mb-0">
              Add A Class
            </h1>
            <form className="card-body" onSubmit={handleSubmit(getFormData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  {...register("className", { required: true })}
                  placeholder="Class Name Here"
                  className="input input-bordered"
                />
                {errors.className === "required" && (
                  <p className="text-red-600">Class Name is Required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input
                  type="text"
                  {...register("classImage", { required: true })}
                  placeholder="Class Image Link Here"
                  className="input input-bordered"
                />
                {errors.classImage === "required" && (
                  <p className="text-red-600">Class Image is Required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor&apos;s Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  {...register("instructorName", { required: true })}
                  placeholder="Instructor Name Here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor&apos;s Email</span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
              </div>
              <div className="flex md:flex-row flex-col justify-between gap-2">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Available Seates</span>
                  </label>
                  <input
                    type="text"
                    {...register("seats", {
                      required: true,
                    })}
                    placeholder="Available Seates"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    {...register("price", {
                      required: true,
                    })}
                    placeholder="$ Price"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-3">
                <input type="submit" value="Add" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
