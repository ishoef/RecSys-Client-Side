import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {

    // Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('i am clickng for submit form');
    }


    // Google Login
    const handleloginWithGoogle = () => {
        console.log('i am clicking for login with google');
    }


    return (
      <>
        <div className="w-[100%] flex justify-center items-center py-10 lg:py-20 bg-gray-200 dark:bg-gray-900">
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
                  <label className="text-xl font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="focus:outline-primary dark:focus:outline-0 border border-gray-400 rounded py-2 px-3"
                    placeholder="Enter Your Name"
                    type="text"
                    name="name"
                    required
                  />
                </div>

                {/* PhotoUrl */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <label className="text-xl font-semibold" htmlFor="photoUrl">
                    Photo URL
                  </label>
                  <input
                    className="focus:outline-primary dark:focus:outline-0 border border-gray-400 rounded py-2 px-3"
                    placeholder="Photo URL"
                    type="text"
                    name="photoUrl"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <label className=" text-xl font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="focus:outline-primary dark:focus:outline-0 border border-gray-400 rounded py-2 px-3"
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    required
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <label className=" text-xl font-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="focus:outline-primary dark:focus:outline-0 border border-gray-400 rounded py-2 px-3"
                    placeholder="Enter Your password"
                    type="password"
                    name="password"
                    required
                  />
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