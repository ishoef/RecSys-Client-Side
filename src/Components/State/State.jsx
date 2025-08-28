import React from "react";

const State = ({ state }) => {
  const { title, description, statistic, icon, gradient } = state;
  return (
    <div className="bg-base-100 dark:bg-gray-900 shadow-xl p-8 flex flex-col gap-4 flex-1 h-full justify-between rounded-xl cursor-pointer hover:scale-102 duration-300">
      {/* Icon Wrapper */}
      <div
        className={`p-5 bg-gradient-to-r opacity-90 ${gradient} dark:from-blue-600 dark:via-purple-600 dark:to-teal-600 text-white text-2xl rounded-2xl shadow-xl w-fit`}
      >
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-2xl poppins-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>

      {/* Description */}
      <p className="font-semibold text-[17px] text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* Statistic */}
      <div className="border w-fit px-3 rounded-full border-gray-400 dark:border-gray-600 font-semibold text-gray-800 dark:text-gray-200">
        {statistic}
      </div>
    </div>
  );
};

export default State;
