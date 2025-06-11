import React, { useState } from "react";
import QueryTableRow from "./QueryTableRow/QueryTableRow";

const RecommendatinTable = ({ recomms, headers }) => {
  const [recommns, setRecommns] = useState(recomms);
  console.log(headers);
  return (
    <div className="overflow-x-auto min-h-[calc(100vh-438px)]">
      <table className="table table-lg border border-primary ">
        <thead>
          <tr className="bg-primary dark:bg-gray-800 text-white text-[18px]">
            {headers.map((head, index) => (
              <th key={index} >{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {recommns.map((recomm) => (
            <QueryTableRow
              recommns={recommns}
              setRecommns={setRecommns}
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
