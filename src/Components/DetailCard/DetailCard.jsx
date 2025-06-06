import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const DetailCard = ({ details }) => {
  const {
    userName,
    createdAt,
    queryTitle,
    productName,
    productImageUrl,
    productBrand,
    recommendationCount,
    boycottingReason,
  } = details;
  return (
    <div className="w-6/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4 border p-3 rounded-2xl border-gray-400 shadow">
          <div>
            <ProfilePhoto />
          </div>
          <div>
            <h1 className="poppins-semibold">{userName}</h1>
            <div>
              <p className="flex items-center gap-2 poppins-regular">
                {" "}
                <MdOutlineDateRange size={18} />
                {createdAt}
              </p>
            </div>
          </div>
        </div>
        <h1 className="poppins-semibold text-primary text-2xl">{queryTitle}</h1>
        <div className="flex gap-5 h-full  flex-1">
          <div>
            <img
              className="rounded-xl w-full h-50"
              src={productImageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between ">
            <div className="flex items-center gap-4">
              <h1 className="text-xl poppins-semibold">{productName}</h1>
              <p className="bg-gray-200 px-2 rounded-2xl font-semibold">
                {productBrand}
              </p>
            </div>
            <div className="space-y-2">
              <p className="poppins-regular">Boycotting Reason:</p>
              <p>{boycottingReason}</p>
            </div>
            <div className="flex items-center gap-2 text-primary text-[18px] poppins-regular">
              {" "}
              <AiOutlineLike size={24} color="#14b8a6" />
              {recommendationCount} Recommendations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
