import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import NoQueryText from "../NoQueryText/NoQueryText";
// import { useLocation } from "react-router";

const QueriesCards = ({sixCard}) => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/queries")
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

  if (queries.length === 0) {
    return <NoQueryText/>
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
