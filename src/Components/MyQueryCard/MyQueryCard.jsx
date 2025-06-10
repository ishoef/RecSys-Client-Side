import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router";

const MyQueryCard = ({ query }) => {
  const {
    _id,
    userName,
    createDate,
    createTime,
    queryTitle,
    productName,
    productBrand,
    productImageURL,
    recommendationCount,
    boycottingReson,
  } = query;

  return (
    <div className="p-5 bg-white shadow-md hover:scale-102 transition-transform border border-gray-300 duration-300 rounded-lg">
      <div className="flex flex-col h-full justify-between gap-4">
        {/* Profile Info */}
        <div className="profile-details w-full flex flex-1 gap-4">
          <div className="basis-12">
            <ProfilePhoto tooltip={false} />
          </div>
          <div className="flex justify-between basis w-full">
            <div>
              <h1 className="poppins-semibold">{userName || "Abdullah"}</h1>
              <div>
                <p className="poppins-regular flex items-center gap-2 text-gray-400">
                  <MdOutlineDateRange size={18} />
                  {createDate}
                </p>
                <p className="poppins-regular flex items-center gap-2 text-gray-400">
                  <MdAccessTime size={18} />
                  {createTime}
                </p>
              </div>
            </div>
            <div>
              <p className="bg-gray-200 px-2 rounded-full">
                {productBrand || "Unknown Brand"}
              </p>
            </div>
          </div>
        </div>

        {/* Product Photo */}
        <div>
          <img
            className="rounded-xl w-full h-60 object-cover"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=500&auto=format&fit=crop&q=60"
            }
            alt="product"
          />
        </div>

        {/* Details */}
        <div className="h-full flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="poppins-semibold text-xl">
              {queryTitle || "Query Title Not Provided"}
            </h1>
            <p className="poppins text-gray-500">
              <span className="text-gray-900 font-semibold">Product:</span>{" "}
              {productName || "Unknown Product"}
            </p>
            <p className="poppins text-gray-500 line-clamp-2">
              {boycottingReson || "No specific reason provided"}
            </p>

            {/* See more link */}
            {boycottingReson && boycottingReson.length > 120 && (
              <Link
                to={`/details/${_id}`}
                className="text-primary hover:underline text-sm"
              >
                See more
              </Link>
            )}
          </div>

          {/* Crud Actions */}
          <div className="flex justify-between items-center pt-5 border-t-2 border-t-gray-300">
            <div className="text-primary flex items-center gap-2">
              <FaRegCommentAlt />
              <span className="text-[18px]">{recommendationCount || 0}</span>
            </div>
            <div className="space-x-3">
              <Link
                to={`/details/${_id}`}
                className="btn rounded-md hover:bg-gray-50 bg-transparent border border-gray-300 poppins"
              >
                View Details
              </Link>
              <Link
                to={`/myqueries/update/${_id}`}
                className="btn rounded-md hover:bg-gray-50 bg-transparent border border-gray-300 poppins"
              >
                <CiEdit size={18} />
                <span className="hidden"> Edit</span>
              </Link>
              <button className="btn rounded-md hover:bg-red-50 bg-transparent border border-red-500 poppins text-red-500">
                <RiDeleteBin5Line />
                <span className="hidden"> Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
