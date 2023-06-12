import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(7);
  }, []);
  //TODO: handle errors
  const getFormData = (data) => {
    const { email, password } = data;
    if (validateCaptcha(data.captcha) == true) {
      login(email, password)
        .then((res) => {
          const currentUser = res.user;
          navigate(from, { replace: true });
        })
        .catch((err) => alert(err));
    } else {
      return setError(true);
    }
  };

  return (
    <div className="loginForm">
      <div className="hero md:px-8">
        <div className="hero-content md:w-5/12 shadow-2xl shadow-slate-600 flex ">
          <div className="card min-h-screen flex-shrink-0 w-full bg-white bg-blend-overlay pb-5">
            <h1 className="text-3xl font-bold text-center pt-3 mb-0">Login</h1>
            <form className="card-body" onSubmit={handleSubmit(getFormData)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Type here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? `text` : `password`}
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute bottom-4 right-3 cursor-pointer"
                >
                  <FaEye />
                </span>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div>
                <LoadCanvasTemplate />
                <input
                  onFocus={(e) => {
                    (e.target.value = ""), setError(false);
                  }}
                  type="captcha"
                  {...register("captcha", { required: true })}
                  placeholder="Input the captcha"
                  className="input input-bordered mt-2 w-full"
                />
                {error && (
                  <p className="text-red-600">Captcha doesn&apos;t match</p>
                )}
              </div>
              <div className="form-control mt-3">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="card-body my-0 py-0">
              <p>
                Don&apos;t have an Account?{" "}
                <Link
                  to="/signup"
                  state={location.state}
                  className="text-indigo-400 underline"
                >
                  Sign Up
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

export default Login;
