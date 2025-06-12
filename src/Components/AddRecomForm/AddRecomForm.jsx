import React, { use } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import AllRecomms from "../AllRecomms/AllRecomms";
import { AuthContext } from "../../Context/AuthProvider";

const AddRecomForm = ({ details, setDetails }) => {
  const { user } = use(AuthContext);

  const handleAddRecomm = (e) => {
    e.preventDefault();

    const form = e.target;

    // get the time and Date
    const now = new Date();
    const currentDate = now.toLocaleDateString("en-US");
    const currentTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const recommData = {
      title: form.title.value,
      recommendProductName: form.recommendProductName.value,
      productImageURL: form.productImageURL.value,
      recommendationReason: form.recommendationReason.value,
      queryId: details._id, // Assuming details contains the query ID
      queryTitle: details.queryTitle,
      recommenderName: user?.displayName,
      recommenderEmail: user?.email,
      recommenderPhoto: user?.photoURL,
      creationDate: currentDate,
      creationTime: currentTime,
    };

    console.log(recommData);

    fetch(`http://localhost:3000/queries/${details._id}/recommendations`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recommData),
    }).then(() => {
      // ✅ Re-fetch updated query
      fetch(`http://localhost:3000/queries/${details._id}`)
        .then((res) => res.json())
        .then((updatedData) => {
          setDetails(updatedData); // ✅ set updated query including new recommendations
          form.reset(); // Optional: Clear the form
        });
    });
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

          <label htmlFor="recommendProductName" className="flex flex-col gap-2">
            <span className="poppins-regular">Recommended Product Name</span>
            <input
              type="text"
              name="recommendProductName"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="productImageURL" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Image URL
            </span>
            <input
              type="text"
              name="productImageURL"
              id=""
              className="input w-full focus-within:outline-none "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="recommendationReason">
            <span className="poppins-regular">Recommendation Reason</span>
            <textarea
              name="recommendationReason"
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

export default AddRecomForm;
