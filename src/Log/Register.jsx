import React, { useContext, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { IoIosLink } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createUser, auth, setUser, updateUser } = useContext(AuthContext);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    document.title = "Register | RecSyS";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowError(null);

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    const errorMessages = {
      hasUppercase: "Password must contain at least one uppercase letter.",
      hasLowercase: "Password must contain at least one lowercase letter.",
      hasMinLength: "Password must be at least 6 characters long.",
    };

    if (!hasUppercase) {
      toast.error(errorMessages.hasUppercase);
      setShowError(errorMessages.hasUppercase);
      return;
    }
    if (!hasLowercase) {
      toast.error(errorMessages.hasLowercase);
      setShowError(errorMessages.hasLowercase);
      return;
    }
    if (!hasMinLength) {
      toast.error(errorMessages.hasMinLength);
      setShowError(errorMessages.hasMinLength);
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL }).then(() => {
          setUser(user);
          navigate("/");
          Swal.fire({
            title: "Registration Successful",
            text: "You have successfully registered!",
            icon: "success",
            confirmButtonText: "OK",
          });
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Registration Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  // Google Login
  const provider = new GoogleAuthProvider();
  const handleloginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
        Swal.fire({
          title: "Welcome!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorMessages = {
          "auth/popup-blocked":
            "The popup was blocked by the browser. Please allow popups and try again.",
          "auth/popup-closed-by-user":
            "The popup was closed before completing sign in.",
          "auth/cancelled-popup-request":
            "Only one popup request is allowed at a time. Please try again.",
          "auth/operation-not-allowed":
            "Google sign-in is not enabled. Please contact support.",
          "auth/account-exists-with-different-credential":
            "An account already exists with the same email but different sign-in credentials.",
          default: "Google sign-in failed. Please try again.",
        };
        const message = errorMessages[error.code] || errorMessages.default;
        toast.error(message);
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center py-10 lg:py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 p-3 lg:p-5 w-120">
        <h1 className="text-xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100">
          <span className="text-primary font-bold underline">Register</span>{" "}
          Your Account
        </h1>

        <div className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 lg:p-10 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-2 lg:gap-4">
              <label className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                Name
              </label>
              <label className="input w-full border bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-within:outline-none">
                <span className="text-xl text-gray-400">
                  <CiUser />
                </span>
                <input
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                  required
                />
              </label>
            </div>

            {/* Photo URL */}
            <div className="flex flex-col gap-2 lg:gap-4">
              <label className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                Photo URL
              </label>
              <label className="input w-full border bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-within:outline-none">
                <span className="text-xl text-gray-400">
                  <IoIosLink />
                </span>
                <input
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Photo URL"
                  type="url"
                  name="photoUrl"
                  required
                />
              </label>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 lg:gap-4">
              <label className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                Email
              </label>
              <label className="input w-full border bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-within:outline-none">
                <span className="text-xl text-gray-400">
                  <MdOutlineMail />
                </span>
                <input
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                  required
                />
              </label>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 lg:gap-4">
              <label className="text-xl font-semibold text-gray-900 dark:text-gray-200">
                Password
              </label>
              <label className="input w-full border bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus-within:outline-none">
                <span className="text-xl text-gray-400">
                  <IoLockClosedOutline />
                </span>
                <input
                  className="w-full bg-transparent focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="••••••••"
                  type="password"
                  name="password"
                  required
                />
              </label>
            </div>

            {/* Error Message */}
            <p className="text-red-600">{showError}</p>

            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2 lg:gap-4 text-gray-700 dark:text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="checkbox" required />
                <span>Remember me</span>
              </label>
              <p className="text-blue-600 dark:text-blue-400">
                <Link>Forgot Password?</Link>
              </p>
            </div>

            <button className="btn w-full bg-primary text-white hover:bg-orange-600">
              Register
            </button>
          </form>

          <div className="divider text-gray-500 dark:text-gray-400">
            Or Continue with
          </div>

          <button
            onClick={handleloginWithGoogle}
            className="btn border w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <FcGoogle /> Google
          </button>
        </div>

        <p className="text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
