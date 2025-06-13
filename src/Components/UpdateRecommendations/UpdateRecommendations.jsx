import React, { use } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const UpdateRecommendations = () => {
  const { user } = use(AuthContext);

  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();

  console.log(data);
  const handleUpdateRecomms = (e) => {
    e.preventDefaout();

    const form = e.target;

    const recommData = {
      title: form.title.value,
      recommendProductName: form.recommendProductName.value,
      productImageURL: form.productImageURL.value,
      recommendationReason: form.recommendationReason.value,
      queryId: details._id,
      queryTitle: details.queryTitle,
      queryCreatorName: details.userName,
      queryCreatorEmail: details.userEmail,
      recommenderName: user?.displayName,
      recommenderEmail: user?.email,
      recommenderPhoto: user?.photoURL,
      creationDate: currentDate,
      creationTime: currentTime,
    };
  };

  return (
    <>
      <div className="w-5/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-10 my-10 ">
        <form onSubmit={handleUpdateRecomms} className="flex flex-col gap-4">
          <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
            <h1 className="poppins-semibold text-2xl text-primary">
              Update Your Recommendation
            </h1>
            <FaRegCommentAlt size={32} color="#14b8a6" />
          </div>
          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">Recommendation Title</span>
            <input
              type="text"
              name="title"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="recommendProductName" className="flex flex-col gap-2">
            <span className="poppins-regular">Recommended Product Name</span>
            <input
              type="text"
              name="recommendProductName"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="productImageURL" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Image URL
            </span>
            <input
              type="url"
              name="productImageURL"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          <label htmlFor="recommendationReason">
            <span className="poppins-regular">Recommendation Reason</span>
            <textarea
              name="recommendationReason"
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring mt-2"
              placeholder="Explain why this is a good alternative"
              required
            ></textarea>
          </label>
          <button className="btn btn-primary" type="submit">
            Update Recommendation
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateRecommendations;
