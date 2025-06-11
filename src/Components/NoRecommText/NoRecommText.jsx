import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router";
const NoRecommText = () => {
  return (
    <div
      className={`w-11/12 md:w-10/12 lg:w-9/12 py-16 mx-auto my-10 flex justify-center items-center rounded-2xl shadow-lg bg-gray-100`}
    >
      <div className="flex justify-center gap-3 flex-col items-center px-4">
        <span className="text-primary">
          <FaBoxOpen size={84} />
        </span>
        <p className="text-2xl poppins text-center text-primary font-semibold">
          No Reccomendations Right Now
        </p>
        <p className="text-gray-500 text-center">
          You can add a recommendations by clicking the button below.
        </p>
        <Link to={"/addquery"} className="btn btn-primary mt-4 text-[16px]">
          Add Recommendation
        </Link>
      </div>
    </div>
  );
};

export default NoRecommText;
