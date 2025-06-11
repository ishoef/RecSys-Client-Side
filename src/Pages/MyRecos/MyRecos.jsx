import React from "react";
import { responsive } from "../../Layouts/RootLayout";
import { FaPlus, FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import Title from "../../Components/Title/Title";
import RecommendatinTable from "../../Components/RecommendatinTable/RecommendatinTable";

const MyRecos = () => {
  const recomms = [
    {
      _id: "1",
      product: "Google Pixel 7 Pro",
      recommendation: "Google Pixel 7 Pro is a great alternative",
      query: "Is there any better alternative to iPhone 14 Pro...",
      by: "Alex Johnson",
      date: "6/2/2023",
    },
    {
      _id: "2",
      product: "Adidas Ultraboost 22",
      recommendation: "Try the Adidas Ultraboost 22",
      query: "Looking for running shoes with better arch support...",
      by: "Thomas Wilson",
      date: "5/28/2023",
    },
    {
      _id: "3",
      product: "Shark Vertex Pro",
      recommendation: "Shark Vertex Pro is more affordable",
      query: "Any more affordable vacuum cleaners with similar features...",
      by: "Lisa Garcia",
      date: "5/25/2023",
    },
    {
      _id: "4",
      product: "Samsung Galaxy S22",
      recommendation: "Samsung Galaxy S22 offers a powerful option",
      query: "Is there a high-end Android phone under $800?",
      by: "David Lee",
      date: "6/1/2023",
    },
    {
      _id: "5",
      product: "Nike Air Zoom Pegasus 39",
      recommendation: "Great for long-distance running",
      query: "Which shoes are good for marathon training?",
      by: "Sarah Kim",
      date: "5/27/2023",
    },
    {
      _id: "6",
      product: "Dyson V8 Absolute",
      recommendation: "Dyson V8 gives excellent performance",
      query: "What's a lightweight vacuum for pet hair?",
      by: "Rachel Moore",
      date: "5/24/2023",
    },
    {
      _id: "7",
      product: "OnePlus 11",
      recommendation: "OnePlus 11 balances power and price",
      query: "Need a fast Android phone for gaming and multitasking",
      by: "Jason Wang",
      date: "5/29/2023",
    },
    {
      _id: "8",
      product: "Asics Gel-Kayano 30",
      recommendation: "Asics Gel-Kayano 30 provides great stability",
      query: "Best running shoes for overpronation?",
      by: "Emily Davis",
      date: "5/26/2023",
    },
    {
      _id: "9",
      product: "Bissell CleanView",
      recommendation: "Affordable vacuum with strong suction",
      query: "Any good vacuums under $200?",
      by: "Carlos Hernandez",
      date: "5/23/2023",
    },
    {
      _id: "10",
      product: "Pixel Buds Pro",
      recommendation: "Pixel Buds Pro are great with Android",
      query: "Any good wireless earbuds for Android?",
      by: "Nina Patel",
      date: "5/30/2023",
    },
  ];

  const tableHeaderText = [
    "Product",
    "Recommendation",
    "Query",
    "Date",
    "Actions",
  ];

  return (
    <section className={`${responsive} mt-10`}>
      {/* Title Box */}
      <div className="flex justify-between items-center py-8 px-10 bg-primary backdrop-blur-3xl rounded-2xl">
        <Title className={"text-white"} title={`My Recommendations`} />
        {/* <div className="flex items-center gap-3 ">
            <label className="input w-70 ring-0 focus-within:ring-0 focus-within:ring-primary focus-within:outline-none">
              <div className="opacity-50">
                <IoIosSearch size={20} />
              </div>
              <input
                className="grow focus:outline-none focus:border-transparent"
                type="search"
                name="search"
                placeholder="Search Product"
              />
            </label>

            <Link to={"/addquery"} className="btn bg-white text-primary px-8">
              <FaPlus />
              Add New Query
            </Link>
          </div> */}

        <span className="text-5xl text-white">
          <FaRegCommentAlt />
        </span>
      </div>

      {/* Recommendations Table */}

      <div className="my-10">
        <RecommendatinTable headers={tableHeaderText} recomms={recomms} />
      </div>
    </section>
  );
};

export default MyRecos;
