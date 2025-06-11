import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const QueryTableRow = ({ recomm, dlt }) => {
  const { product, recommendation, query, by, date } = recomm;
  return (
    <tr>
      <td>
        <Link to={"/"} className="flex items-center gap-3">
          <img
            className="w-20 h-18 rounded-xl"
            src={
              recomm.imageUrl ||
              "https://images.unsplash.com/photo-1528739964081-51ad930e29c6?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmljaCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            }
            alt="Procut Image"
          />
          <h1 className="text-xl poppins hover:text-green-500 transition-normal">
            {product}
          </h1>
        </Link>
      </td>
      <td>
        <Link to={`/recommDetails/${recomm._id}`}>{recommendation}</Link>
      </td>
      <td>
        <p>{query}</p>
        <p>{by}</p>
      </td>
      <td>{date}</td>
      <td className="space-y-3">
        <Link
          to={`/myrecomms/update/${recomm._id}`}
          type="button"
          className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded"
        >
          <IoCreateOutline color="white" />
        </Link>
        {dlt && (
          <button
            //   onClick={() => handleDelete(recomm._id)}
            type="button"
            className="hover:scale-102 hover:shadow cursor-pointer bg-primary w-fit flex items-center justify-center p-2 rounded"
          >
            <MdDelete color="white" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default QueryTableRow;
