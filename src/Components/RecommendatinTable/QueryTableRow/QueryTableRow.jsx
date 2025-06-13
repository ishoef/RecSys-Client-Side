import React from "react";
import { IoCreateOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const QueryTableRow = ({ recomm, dlt }) => {
  const {
    queryTitle,
    queryCreatorName,
    creationDate,
    creationTime,
    recommendProductName,
    productImageURL,
    queryId,
    title,
  } = recomm;

  console.log(recomm);

  return (
    <tr>
      <td>
        <Link to={"/"} className="flex items-center gap-3">
          <img
            className="w-20 h-18 rounded-xl"
            src={
              productImageURL ||
              "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
            }
            alt="Procut Image"
          />
          <h1 className="text-xl poppins hover:text-green-500 transition-normal">
            {recommendProductName}
          </h1>
        </Link>
      </td>
      <td>
        <Link to={`/recommDetails/${queryId}`}>
          {title || "No Recommendation"}
        </Link>
      </td>
      <td>
        <p>{queryTitle}</p>
        <p className="text-[14px] bg-gray-100 w-fit px-2 rounded-2xl mt-1">
          {queryCreatorName}
        </p>
      </td>
      <td>
        <div>
          <p>{creationDate}</p>
          <p>{creationTime}</p>
        </div>
      </td>
      <td className="space-y-3">
        <Link
          to={`/myrecomms/update/${recomm.queryId}`}
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
