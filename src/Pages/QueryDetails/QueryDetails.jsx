import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailCard from "../../Components/DetailCard/DetailCard";
import AddQueryForm from "../../Components/AddQueryForm/AddQueryForm";

const QueryDetails = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  console.log(params.id);

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

  const details = queries.find((query) => query._id == params.id);
  console.log(details);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <section className="mt-10">
      <div className=" w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
              <DetailCard details={details} />
        <AddQueryForm details={ details} />
      </div>
    </section>
  );
};

export default QueryDetails;
