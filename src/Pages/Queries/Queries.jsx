import React from "react";
import QueriesCards from "../../Components/QueriesCards/QueriesCards";
import { responsive } from "../../Layouts/RootLayout";
import Title from "../../Components/Title/Title";
import { FaList } from "react-icons/fa";
import { LuLayoutGrid } from "react-icons/lu";
import { CiGrid2H } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Link, NavLink } from "react-router";


const Queries = () => {
  return (
    <section className={`${responsive} mt-10`}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center py-8 px-5 bg-primary/10 backdrop-blur-3xl border border-primary/60 rounded-2xl">
          <Title title={"All Product Queries"} />
          <div className="flex items-center gap-3 ">
            <label className="input w-100 ring-0 focus-within:ring-0 focus-within:outline-none">
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

            <NavLink className="border hover:text-primary border-gray-400 p-[10px] rounded">
              <LuLayoutGrid />
            </NavLink>
            <NavLink className="border hover:text-primary border-gray-400 p-[10px] rounded">
              <FaList />
            </NavLink>
            <NavLink className="border hover:text-primary border-gray-400 p-[10px] rounded">
              <CiGrid2H />
            </NavLink>
          </div>
        </div>
        <hr className="mt-5 border border-gray-300" />
        <QueriesCards />
      </div>
    </section>
  );
};

export default Queries;
