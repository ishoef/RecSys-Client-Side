import React from "react";
import QueryTableRow from "./QueryTableRow/QueryTableRow";

const RecommendatinTable = ({ recomms, headers, dlt }) => {

  return (
    <div className="overflow-x-auto min-h-[calc(100vh-438px)]">
      <table className="table table-lg border border-primary ">
        <thead>
          <tr className="bg-primary dark:bg-gray-800 text-white text-[18px]">
            {headers.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recomms.map((recomm) => (
            <QueryTableRow
              dlt={dlt}
              recomms={recomms}
              key={recomm._id}
              recomm={recomm}
            ></QueryTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecommendatinTable;
