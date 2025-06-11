import React, { use, useEffect, useState } from "react";
import { responsive } from "../../Layouts/RootLayout";
import Title from "../../Components/Title/Title";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import MyQueryCard from "../../Components/MyQueryCard/MyQueryCard";
import NoQueryText from "../../Components/NoQueryText/NoQueryText";
import { AuthContext } from "../../Context/AuthProvider";
import NormalLoader from "../../Components/Loader/NormalLoader";

const MyQueries = () => {
  const { user } = use(AuthContext);

  const [myQueries, setMyQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:3000/queries?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyQueries(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Failed to fetch user Queries:", error);
          setMyQueries([]);
          setLoading(false);
        });
    } else {
      setMyQueries([]);
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <NormalLoader />;
  }

  if (!myQueries || myQueries.length === 0) {
    return <NoQueryText />;
  }

  return (
    <section className={`${responsive} mt-10`}>
      <div>
        <div className="flex justify-between items-center py-8 px-5 bg-primary backdrop-blur-3xl rounded-2xl">
          <Title
            className={"text-white"}
            title={`All Product Queries (${myQueries.length}) `}
          />
          <div className="flex items-center gap-3 ">
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
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {myQueries.map((query) => (
            <MyQueryCard
              key={query._id}
              setMyQueries={setMyQueries}
              myQueries={myQueries}
              query={query}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyQueries;
