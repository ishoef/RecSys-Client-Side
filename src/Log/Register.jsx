import React from "react";
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router";

const Register = () => {
  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am clickng for submit form");
  };

  // Google Login
  const handleloginWithGoogle = () => {
    console.log("i am clicking for login with google");
  };

  return (
    <>
      <div className="w-[100%] min-h-screen flex justify-center items-center py-10 lg:py-20 bg-gray-200 dark:bg-gray-900">
        <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 p-3 lg:p-5 w-120">
          <h1 className="text-xl lg:text-3xl font-semibold">
            <span className="text-primary font-bold underline">Register</span>{" "}
            Your Account
          </h1>
          <div className="w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-2xl p-6 lg:p-10">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-2 lg:gap-4">
                <label className="text-xl font-semibold" htmlFor="photoUrl">
                  Photo URL
                </label>
                <label
                  className="input w-full border focus-within:border-primary focus-within:outline-none"
                  htmlFor=""
                >
                  <span className="text-xl text-gray-400">
                    <CiUser />
                  </span>
                  <input
                    placeholder="Enter You Name"
                    type="text"
                    name="name"
                    required
                  />
                </label>
              </div>

              {/* PhotoUrl */}
              <div className="flex flex-col gap-2 lg:gap-4">
                <label className="text-xl font-semibold" htmlFor="photoUrl">
                  Photo URL
                </label>
                <label
                  className="input w-full border focus-within:border-primary focus-within:outline-none"
                  htmlFor=""
                >
                  <span className="text-xl text-gray-400">
                    <IoIosLink />
                  </span>
                  <input
                    placeholder="Photo URL"
                    type="url"
                    name="photoUrl"
                    required
                  />
                </label>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 lg:gap-4">
                <label className="text-xl font-semibold" htmlFor="email">
                  Email
                </label>
                <label
                  className="input border focus-within:border-primary w-full focus-within:outline-none"
                  htmlFor=""
                >
                  <span className="text-xl text-gray-400">
                    {" "}
                    <MdOutlineMail />
                  </span>

                  <input
                    className="dark:focus:outline-0 "
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    required
                  />
                </label>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2 lg:gap-4">
                <label className="text-xl font-semibold" htmlFor="password">
                  Password
                </label>
                <label
                  className="input border focus-within:border-primary w-full focus-within:outline-none"
                  htmlFor=""
                >
                  <span className="text-xl text-gray-400">
                    {" "}
                    <IoLockClosedOutline />
                  </span>
                  <input
                    placeholder="••••••••"
                    type="password"
                    name="password"
                    required
                  />
                </label>
              </div>

              {/* <p className="text-red-600">{showError}</p> */}

              <div className="flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between gap-2 lg:gap-4">
                <label className="label">
                  <input
                    name=" check"
                    type="checkbox"
                    className="checkbox"
                    required
                  />
                  <span>Remember me</span>
                </label>
                <p className="text-blue-600">
                  <Link>Forgot Password?</Link>
                </p>
              </div>

              <button className="btn w-full bg-primary text-white">
                Register
              </button>
            </form>

            <div className="divider">Or Continue with</div>

            <button
              onClick={handleloginWithGoogle}
              className="btn border w-full dark:bg-gray-700 "
            >
              <FcGoogle /> Google
            </button>
          </div>
          <p className="text-gray-400">
            You Already Have an Account?{" "}
            <Link to="/auth/login" className="text-blue-600 underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
