import React, { use } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import AllRecomms from "../AllRecomms/AllRecomms";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const AddRecomForm = ({ details, setDetails }) => {
  const { user } = use(AuthContext);

  const handleAddRecomm = (e) => {
    e.preventDefault();
    const form = e.target;

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

    fetch(
      `https://reco-sys-server-side.vercel.app/queries/${details._id}/recommendations?userEmail=${user?.email}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(recommData),
      }
    ).then(() => {
      fetch(
        `https://reco-sys-server-side.vercel.app/queries/${details._id}?userEmail=${user?.email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((updatedData) => {
          setDetails(updatedData);
          Swal.fire({
            title: "Success!",
            text: "Query created successfully",
            icon: "success",
            confirmButtonText: "Add Another Recommendation",
          });
          form.reset();
        });
    });
  };

  return (
    <>
      <div className="lg:w-8/12 mx-auto my-10 p-4 md:p-10 rounded-2xl border border-gray-400 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <form onSubmit={handleAddRecomm} className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between p-4 mb-5 rounded-2xl border border-gray-400 dark:border-gray-700 shadow bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
            <h1 className="poppins-semibold text-xl md:text-2xl text-primary">
              Add Your Recommendation
            </h1>
            <FaRegCommentAlt size={32} color="#14b8a6" />
          </div>

          {/* Recommendation Title */}
          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommendation Title <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="title"
              className="input w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary transition-colors duration-300"
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
              required
            />
          </label>

          {/* Recommended Product Name */}
          <label htmlFor="recommendProductName" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="recommendProductName"
              className="input w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary transition-colors duration-300"
              placeholder="E.g., Google Pixel 7 Pro"
              required
            />
          </label>

          {/* Product Image URL */}
          <label htmlFor="productImageURL" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommended Product Image URL{" "}
              <span className="text-red-500">*</span>
            </span>
            <input
              type="url"
              name="productImageURL"
              className="input w-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md p-2 focus:outline-none focus:ring focus:ring-primary transition-colors duration-300"
              placeholder="Image URL"
              required
            />
          </label>

          {/* Recommendation Reason */}
          <label htmlFor="recommendationReason" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Recommendation Reason <span className="text-red-500">*</span>
            </span>
            <textarea
              name="recommendationReason"
              className="w-full h-32 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring focus:ring-primary transition-colors duration-300"
              placeholder="Explain why this is a good alternative"
              required
            ></textarea>
          </label>

          {/* Submit Button */}
          <button className="btn btn-primary bg-primary text-white dark:bg-teal-500 dark:text-gray-900 hover:dark:bg-teal-600 transition-colors duration-300">
            Add Recommendation
          </button>
        </form>
      </div>

      {/* Display all recommendations */}
      <AllRecomms details={details} />
    </>
  );
};

export default AddRecomForm;
