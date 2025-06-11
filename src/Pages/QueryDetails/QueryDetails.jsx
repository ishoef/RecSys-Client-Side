import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailCard from "../../Components/DetailCard/DetailCard";
import AddRecomForm from "../../Components/AddRecomForm/AddRecomForm";
import NormalLoader from "../../Components/Loader/NormalLoader";

const QueryDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    fetch(`http://localhost:3000/queries/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("faild to fetch Data", error);
        setDetails([]);
      });
  }, [params.id]);

  if (loading) {
    return <NormalLoader/> ;
  }

  return (
    <section className="mt-10">
      <div className=" w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <DetailCard details={details} />
        <AddRecomForm details={details} setDetails={setDetails} />
      </div>
    </section>
  );
};

export default QueryDetails;
