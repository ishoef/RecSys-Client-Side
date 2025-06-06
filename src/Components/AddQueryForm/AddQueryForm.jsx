import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import AllRecomms from "../AllRecomms/AllRecomms";

const AddQueryForm = ({ details }) => {
  const handleAddRecomm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-8/12 border border-gray-400 shadow-xl mx-auto rounded-2xl p-10 my-10 ">
        <form onSubmit={handleAddRecomm} className="flex flex-col gap-4">
          <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
            <h1 className="poppins-semibold text-2xl text-primary">
              Add Your Recommendation
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
            />
          </label>

          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">Recommended Product Name</span>
            <input
              type="text"
              name="title"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Image URL
            </span>
            <input
              type="text"
              name="title"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="">
            <span className="poppins-regular">Recommendation Reason</span>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring mt-2"
              placeholder="Explain why this is a good alternative"
            ></textarea>
          </label>
          <button className="btn btn-primary" type="submit">
            Add Recommendation
          </button>
        </form>
      </div>

      <AllRecomms details={details} />
    </>
  );
};

export default AddQueryForm;
