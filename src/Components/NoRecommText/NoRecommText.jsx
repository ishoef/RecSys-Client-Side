import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router";

const NoRecommText = ({ btnText }) => {
  return (
    <div
      className="w-11/12 md:w-10/12 lg:w-9/12 py-16 mx-auto my-10 flex justify-center items-center rounded-2xl shadow-lg 
                 bg-gray-100 dark:bg-gray-800 dark:border border-gray-700 transition-colors duration-300"
    >
      <div className="flex justify-center gap-3 flex-col items-center px-4">
        <span className="text-primary dark:text-teal-400">
          <FaBoxOpen size={84} />
        </span>
        <p className="text-2xl poppins text-center font-semibold text-primary dark:text-teal-400">
          No Recommendations Right Now
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-center">
          You can add a recommendation by clicking the button below.
        </p>
        <Link
          to={"/queries"}
          className="btn btn-primary mt-4 text-[16px] py-6 md:py-0"
        >
          {btnText ? btnText : "Add Recommendation"}
        </Link>
      </div>
    </div>
  );
};

export default NoRecommText;
