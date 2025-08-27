import React from "react";
import Button from "../../../Components/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import QueriesCards from "../../../Components/QueriesCards/QueriesCards";
import Title from "../../../Components/Title/Title";

const RecentQueries = () => {
  const btnText = (
    <div className="flex items-center justify-center gap-3">
      <p>View All</p>
      <FaArrowRight />
    </div>
  );

  const btnClass =
    "bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 btn rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition";

  return (
    <section className="mt-10 md:mt-20">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flexeble">
          <Title
            className="text-gray-900 dark:text-gray-100"
            title={"Recent Queries"}
          />
          <Button to={"/queries"} className={btnClass} text={btnText}></Button>
        </div>

        <div className="mt-6">
          <QueriesCards sixCard={true} />
        </div>
      </div>
    </section>
  );
};

export default RecentQueries;
