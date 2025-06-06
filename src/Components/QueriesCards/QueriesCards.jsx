import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
// import { useLocation } from "react-router";

const QueriesCards = ({sixCard}) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  // const location = useLocation();
  // const currentPath = location.pathname.split("/")[1];

  useEffect(() => {
    fetch("/queries.json")
      .then((res) => res.json())
      .then((data) => {
        setQueries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("faild to fetch Data", error);
        setQueries([]);
      });
  }, []);

  const sixCards = queries.slice(0, 6);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="grid lg:grid-cols-3 w-full gap-5 md:gap-10 my-10">
      {sixCard
        ? sixCards.map((queiry) => (
            <Cards key={queiry._id} queiry={queiry}></Cards>
          ))
        : queries.map((queiry) => (
            <Cards key={queiry._id} queiry={queiry}></Cards>
          ))}
    </div>
  );
};

export default QueriesCards;
