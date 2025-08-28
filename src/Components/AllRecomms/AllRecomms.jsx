import React from "react";
import { FaRegComment } from "react-icons/fa";
import RecommCard from "../RecommCard/RecommCard";
import NoRecommText from "../NoRecommText/NoRecommText";

const AllRecomms = ({ details }) => {
  return (
    <div className="lg:w-8/12 mx-auto my-10 p-4 md:p-10 rounded-2xl border border-gray-400 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 text-2xl poppins-semibold mb-5">
        <FaRegComment color="#14b8a6" />
        <h1 className="text-xl md:text-2xl">All Recommendations</h1>
        <span>({details?.recommendations?.length || 0})</span>
      </div>

      {/* Recommendations List */}
      {!details?.recommendations || details.recommendations.length === 0 ? (
        <NoRecommText />
      ) : (
        details.recommendations.map((detail, index) => (
          <RecommCard key={index} details={detail} />
        ))
      )}
    </div>
  );
};

export default AllRecomms;
