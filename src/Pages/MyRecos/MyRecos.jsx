import React, { use, useEffect, useState } from "react";
import { responsive } from "../../Layouts/RootLayout";
import { FaPlus, FaRegCommentAlt } from "react-icons/fa";
import { data, Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import Title from "../../Components/Title/Title";
import RecommendatinTable from "../../Components/RecommendatinTable/RecommendatinTable";
import { AuthContext } from "../../Context/AuthProvider";

const MyRecos = () => {
  const { user } = use(AuthContext);

  const [myRecomms, setMyRecomms] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/given-recommendations?userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyRecomms(data);
      })
      .catch((err) => {
        console.log("Error Fetching Recommendations:", err);
      });
  }, [user?.email]);

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

        <span className="text-5xl text-white">
          <FaRegCommentAlt />
        </span>
      </div>

      {/* Recommendations Table */}

      <div className="my-10">
        <RecommendatinTable
          dlt={true}
          headers={tableHeaderText}
          recomms={myRecomms}
        />
      </div>
    </section>
  );
};

export default MyRecos;
