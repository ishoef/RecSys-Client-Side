import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {


    // form Submit

    const handleLogin = (e) => {
        e.preventDefault();
    }

    // gogle Login
    const handleloginWithGoogle = () => {
        console.log('i am clickng for login with google');
    }

    return (
      <>
        <div className="w-[100%] lg:h-[100vh] flex justify-center items-center pt-5 lg:pt-0 bg-gray-200 dark:bg-gray-900">
          <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 p-3 lg:p-5 w-120">
            <h1 className="text-xl lg:text-3xl font-semibold">
              <span className="text-primary font-bold underline">Log in</span>{" "}
              Your Account
            </h1>
            <div className="w-full bg-white dark:bg-gray-800 border border-gray-300 rounded-2xl p-6 lg:p-10">
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex flex-col gap-2 lg:gap-4">
                  <label className="text-xl font-semibold" htmlFor="email">
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
                  <label className="text-xl font-semibold" htmlFor="password">
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

                {/* Error Massege */}
                {/* <p className="text-red-600">{error}</p> */}

                {/* Remeber Me */}
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between md:mt-3 lg:mt-3">
                  <label className="label" htmlFor="check">
                    <input
                      name="check"
                      type="checkbox"
                      className="checkbox"
                      required
                    />
                    <span>Remember me</span>
                  </label>

                  {/* Forgot Password */}
                  <p className="text-blue-600">
                    <Link
                    //   onClick={handleForgotPassword}
                      className="hover:underline"
                    >
                      {" "}
                      Forgot Password?{" "}
                    </Link>
                  </p>
                </div>
                <button className="btn bg-primary  text-white">Login</button>
              </form>

              <div className="divider">Or Continue with</div>

              {/* Google Login */}
              <div className="flex gap-2 justify-between">
                <button
                  onClick={handleloginWithGoogle}
                  className="btn border w-full dark:bg-gray-700"
                >
                  <FcGoogle size={20} /> Countinue With Google
                </button>
              </div>
            </div>

            {/* Link To Register Page */}
            <p className="text-gray-400">
              Not a member?{" "}
              <Link to="/auth/register" className="text-blue-600 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </>
    );
};

export default Login;