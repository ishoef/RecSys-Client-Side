import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const DetailCard = ({ details }) => {
  const {
    createDate,
    queryTitle,
    productName,
    productImageURL,
    productBrand,
    boycottingReson,
    userName,
    userPhotoURL,
  } = details;

  return (
    <div className="lg:w-6/12 mx-auto rounded-2xl p-4 md:p-10 border border-gray-400 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="flex flex-col gap-5">
        {/* User Info */}
        <div className="flex items-center gap-4 p-3 rounded-2xl border border-gray-400 dark:border-gray-700 shadow bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
          <ProfilePhoto proPic={userPhotoURL} />
          <div>
            <h1 className="poppins-semibold">{userName}</h1>
            <p className="flex items-center gap-2 poppins-regular text-gray-700 dark:text-gray-300">
              <MdOutlineDateRange size={18} />
              {createDate}
            </p>
          </div>
        </div>

        {/* Query Title */}
        <h1 className="poppins-semibold text-primary text-2xl">{queryTitle}</h1>

        {/* Product Info */}
        <div className="flex flex-col md:flex-row justify-between gap-5 h-full flex-1">
          <div className="basis-1/3">
            <img
              className="rounded-xl w-full h-50 object-cover"
              src={productImageURL}
              alt={productName}
            />
          </div>
          <div className="flex flex-col justify-between gap-5 basis-2/3">
            <div className="flex items-center gap-4">
              <h1 className="text-xl poppins-semibold">{productName}</h1>
              <p className="bg-gray-200 dark:bg-gray-600 px-2 rounded-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {productBrand}
              </p>
            </div>
            <div className="space-y-2">
              <p className="poppins-regular">Boycotting Reason:</p>
              <p>{boycottingReson}</p>
            </div>
            <div className="flex items-center gap-2 text-primary text-[18px] poppins-regular">
              <AiOutlineLike size={24} color="#14b8a6" />
              {details?.recommendations?.length || 0} Recommendations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
