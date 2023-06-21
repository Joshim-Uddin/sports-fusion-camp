import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //TODO: handle errors
  const getFormData = (data) => {
    const { name, email, password, confirm, photoUrl } = data;
    if (password === confirm) {
      signUp(email, password)
        .then((res) => {
          const currentUser = res.user;
          const savedUser = {
            name: name,
            email: email,
            image: photoUrl,
          };
          fetch(
            "https://b7a12-summer-camp-server-side-joshim-uddin.vercel.app/users",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            }
          );
          updateProfile(currentUser, { displayName: name, photoURL: photoUrl })
            .then(() =>
              Swal.fire({
                icon: "success",
                title: "Registration Success",
                showConfirmButton: false,
                timer: 1500,
              })
            )
            .catch((err) => err);
          navigate(from, { replace: true });
        })
        .catch((err) => console.log(err));
    } else {
      setError(true);
    }
  };

  return (
    <div className="loginForm">
      <div className="hero md:px-8">
        <div className="hero-content md:w-5/12 shadow-2xl shadow-slate-600 flex ">
          <div className="card min-h-screen flex-shrink-0 w-full bg-white bg-blend-overlay pb-5">
            <h1 className="text-3xl font-bold text-center pt-3 mb-0">
              Register
            </h1>
            <form className="card-body" onSubmit={handleSubmit(getFormData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Type name here"
                  className="input input-bordered"
                />
                {errors.name === "required" && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email === "required" && (
                  <p className="text-red-600">Email is Required</p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have Minimum eight characters, at least one
                    uppercase letter, one lowercase letter, one number and one
                    special character
                  </p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirm", {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                  placeholder="Retype your password"
                  className="input input-bordered"
                />
                {error ||
                  (errors.confirm?.type === "pattern" && (
                    <p className="text-red-600">Password doesn&apos;t match</p>
                  ))}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Photo URL here"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="card-body my-0 py-0">
              <p>
                Already have an Account?{" "}
                <Link
                  to="/login"
                  state={location.state}
                  className="text-indigo-400 underline"
                >
                  Login
                </Link>
              </p>
            </div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
