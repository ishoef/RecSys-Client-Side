import React from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdOutlineDateRange } from "react-icons/md";
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
      <div className="flex flex-col justify-between h-full gap-4">
        {/* Profile Info */}
        <div className="profile-details w-full flex flex-1 gap-4">
          <div className="basis-12">
            <ProfilePhoto tooltip={false} />
          </div>
          <div className="flex justify-between basis w-full">
            <div>
              <h1 className="poppins-semibold">{userName}</h1>
              <div>
                <p className="poppins-regular flex items-center gap-2">
                  <MdOutlineDateRange size={18} />
                  {createDate}
                </p>
                <p className="poppins-regular flex items-center gap-2">
                  <MdOutlineDateRange size={18} />
                  {createTime}
                </p>
              </div>
            </div>
            <div>
              <p className="bg-gray-200 px-2 rounded-full">
                {" "}
                {productBrand || "Unknown Brand"}{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Product Photo */}
        <div>
          <img
            className="rounded-xl w-full h-65"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            }
            alt="product"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2">
          <h1 className="poppins-semibold text-xl">
            {queryTitle || "Query Title Not Provided"}
          </h1>
          <p className="poppins text-gray-500">
            Product: {productName || "Unknown Product"}
          </p>
          <p className="poppins text-gray-500">
            {boycottingReson || "No specific reason provided"}
          </p>
        </div>

        <hr className="border border-gray-300 mt-5" />
        {/* Crud Actions */}
        <div className="flex justify-between items-cener">
          <div className="text-primary flex items-center gap-2">
            <FaRegCommentAlt />{" "}
            <span className="text-[18px]">{recommendationCount || 0}</span>
          </div>
          <div className="space-x-3 ">
            <Link
              to={`/details/${_id} `}
              className="btn rounded-md hover:bg-gray-50 bg-transparent border border-gray-300 poppins"
            >
              View Details
            </Link>
            <Link className="btn rounded-md hover:bg-gray-50 bg-transparent border border-gray-300 poppins">
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
  );
};

export default MyQueryCard;
