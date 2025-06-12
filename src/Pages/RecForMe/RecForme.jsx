import React from "react";
import RecommendatinTable from "../../Components/RecommendatinTable/RecommendatinTable";
import { FaRegCommentAlt } from "react-icons/fa";
import Title from "../../Components/Title/Title";
import { responsive } from "../../Layouts/RootLayout";

const RecForme = () => {
  const recommsForMe = [
    {
      _id: "1",
      product: "Samsung Galaxy S23 Ultra",
      recommendation: "Samsung Galaxy S23 Ultra is powerful and premium",
      query: "Is there any better alternative to iPhone 14 Pro...",
      recommender: "Michael Rodriguez",
      date: "6/3/2023",
    },
    {
      _id: "2",
      product: "Sony Xperia 5 IV",
      recommendation: "Sony Xperia 5 IV for photography and compact design",
      query: "Is there any better alternative to iPhone 14 Pro...",
      recommender: "Sarah Williams",
      date: "6/4/2023",
    },
    {
      _id: "3",
      product: "Miele Complete C3",
      recommendation: "Miele Complete C3 is worth the price for deep cleaning",
      query: "Any more affordable vacuum cleaners with similar features...",
      recommender: "David Kim",
      date: "5/26/2023",
    },
    {
      _id: "4",
      product: "Shark Navigator Lift-Away",
      recommendation: "Shark Navigator Lift-Away is affordable and efficient",
      query: "Any more affordable vacuum cleaners with similar features...",
      recommender: "Emma Wilson",
      date: "5/27/2023",
    },
    {
      _id: "5",
      product: "Google Pixel 8",
      recommendation: "Pixel 8 offers stock Android and great AI features",
      query: "Best Android alternative with long software support?",
      recommender: "Oliver Thompson",
      date: "6/5/2023",
    },
    {
      _id: "6",
      product: "iRobot Roomba i7",
      recommendation: "Roomba i7 is smart and easy to use",
      query: "Looking for robot vacuum with mapping features",
      recommender: "Sophia Martinez",
      date: "5/30/2023",
    },
    {
      _id: "7",
      product: "LG CordZero A9",
      recommendation:
        "LG CordZero A9 has swappable batteries and strong suction",
      query: "Any cordless vacuum better than Dyson?",
      recommender: "Daniel Carter",
      date: "5/31/2023",
    },
    {
      _id: "8",
      product: "OnePlus Open",
      recommendation: "OnePlus Open brings foldable innovation at better price",
      query: "Looking for a foldable phone under $1500?",
      recommender: "Amelia Turner",
      date: "6/6/2023",
    },
    {
      _id: "9",
      product: "Sony WH-1000XM5",
      recommendation: "Best noise-cancelling headphones right now",
      query: "What are the best headphones for travel and work?",
      recommender: "Ethan Cooper",
      date: "6/1/2023",
    },
    {
      _id: "10",
      product: "Roborock S8",
      recommendation: "Roborock S8 vacuums and mops in one go",
      query: "Any vacuum robot with mopping feature?",
      recommender: "Isabella Scott",
      date: "6/2/2023",
    },
  ];

  const headerText = [
    "Recommended Product",
    "For Query",
    "Recommender",
    "Date",
    "Actions",
  ];

  return (
    <section className={`${responsive} mt-10`}>
      {/* Title Box */}
      <div className="flex justify-between items-center py-8 px-10 bg-primary backdrop-blur-3xl rounded-2xl">
        <Title
          className={"text-white"}
          title={`Recommendations For My Queries`}
        />

        <span className="text-5xl text-white">
          <FaRegCommentAlt />
        </span>
      </div>

      {/* Recommendations Table */}

      <div className="my-10">
        <RecommendatinTable headers={headerText} recomms={recommsForMe} />
      </div>
    </section>
  );
};

export default RecForme;
