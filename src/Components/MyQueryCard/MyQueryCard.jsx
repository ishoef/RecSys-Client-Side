import React, { useState } from "react";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Modal from "../Modal/Modal";
import UpdateModalQuery from "../UpdateModalQuery/UpdateModalQuery";

const MyQueryCard = ({ query, setMyQueries, myQueries }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    _id,
    userName,
    createDate,
    createTime,
    queryTitle,
    productName,
    productBrand,
    productImageURL,
    boycottingReson,
    userPhotoURL,
  } = query;

  const handleDelete = () => {
    Swal.fire({
      timer: 5000,
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://reco-sys-server-side.vercel.app/queries/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your query has been deleted.",
                icon: "success",
                confirmButtonText: "OK",
              });

              const updatedQueries = myQueries.filter(
                (query) => query._id !== _id
              );
              setMyQueries(updatedQueries);
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the query. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  return (
    <>
      <div className="p-5 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md hover:scale-102 transition-transform border border-gray-300 duration-300 rounded-lg">
        <div className="flex flex-col h-full justify-between gap-4">
          {/* Profile Info */}
          <div className="profile-details w-full flex flex-1 gap-4">
            <div className="basis-12">
              <ProfilePhoto proPic={userPhotoURL} tooltip={false} />
            </div>
            <div className="flex justify-between basis w-full">
              <div>
                <h1 className="poppins-semibold text-gray-900 dark:text-gray-100">
                  {userName || "Abdullah"}
                </h1>
                <div>
                  <p className="poppins-regular flex items-center gap-2 text-gray-400 dark:text-gray-300">
                    <MdOutlineDateRange size={18} />
                    {createDate}
                  </p>
                  <p className="poppins-regular flex items-center gap-2 text-gray-400 dark:text-gray-300">
                    <MdAccessTime size={18} />
                    {createTime}
                  </p>
                </div>
              </div>
              <div>
                <p className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 rounded-full">
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
              <h1 className="poppins-semibold text-xl text-gray-900 dark:text-gray-100">
                {queryTitle || "Query Title Not Provided"}
              </h1>
              <p className="poppins text-gray-500 dark:text-gray-300">
                <span className="text-gray-900 dark:text-gray-100 font-semibold">
                  Product:
                </span>{" "}
                {productName || "Unknown Product"}
              </p>
              <p className="poppins text-gray-500 dark:text-gray-300 line-clamp-2">
                {boycottingReson || "No specific reason provided"}
              </p>

              {boycottingReson && boycottingReson.length > 120 && (
                <Link
                  to={`/details/${_id}`}
                  className="text-primary dark:text-teal-400 hover:underline text-sm"
                >
                  See more
                </Link>
              )}
            </div>

            {/* Recommendation Count */}
            <div className="flex justify-between items-center pt-5 border-t-2 border-t-gray-300 dark:border-t-gray-700">
              <div className="text-primary dark:text-teal-400 flex items-center gap-2">
                <FaRegCommentAlt />
                <span className="text-[18px]">
                  {query?.recommendations?.length || 0}
                </span>
              </div>

              {/* Crud Actions */}
              <div className="space-x-3">
                <Link
                  to={`/details/${_id}`}
                  className="btn rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-600 poppins"
                >
                  View Details
                </Link>
                <Link
                  onClick={() => setShowModal(true)}
                  className="btn rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 bg-transparent dark:bg-gray-800 border border-gray-300 dark:border-gray-600 poppins"
                >
                  <CiEdit size={18} />
                  <span className="hidden"> Edit</span>
                </Link>
                <button
                  onClick={handleDelete}
                  className="btn rounded-md hover:bg-red-50 dark:hover:bg-red-700 bg-transparent dark:bg-gray-800 border border-red-500 poppins text-red-500"
                >
                  <RiDeleteBin5Line />
                  <span className="hidden"> Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <UpdateModalQuery
            setShowModal={setShowModal}
            setMyQueries={setMyQueries}
            query={query}
          />
        </Modal>
      )}
    </>
  );
};

export default MyQueryCard;
