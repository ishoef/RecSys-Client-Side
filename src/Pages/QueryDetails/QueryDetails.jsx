import React, { use, useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import DetailCard from "../../Components/DetailCard/DetailCard";
import AddRecomForm from "../../Components/AddRecomForm/AddRecomForm";
import NormalLoader from "../../Components/Loader/NormalLoader";
import { AuthContext } from "../../Context/AuthProvider";

const QueryDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    document.title = "Query Details | RecSyS";
  }, []);

  useEffect(() => {
    fetch(
      `https://reco-sys-server-side.vercel.app/queries/${params.id}?userEmail=${user?.email}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to fetch data", error);
        setDetails([]);
      });
  }, [params.id, user]);

  if (loading) {
    return <NormalLoader />;
  }

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="w-11/12 lg:w-9/12 mx-auto text-gray-900 dark:text-gray-100">
        {/* Query Details Card */}
        <DetailCard details={details} darkMode={true} />

        {/* Add Recommendation Form */}
        <AddRecomForm details={details} setDetails={setDetails} darkMode={true} />
      </div>
    </section>
  );
};

export default QueryDetails;
