import React from 'react';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import { MdAccessTime, MdOutlineDateRange } from 'react-icons/md';

const RecommCard = ({ details }) => {
  console.log(details);

  const {
    recommenderName,
    creationDate,
    creationTime,
    recommendProductName,
    title,
    productImageURL,
    recommendationReason,
  } = details;
  return (
    <div className=" border border-gray-400 shadow-xl rounded-2xl px-8 py-8 flex flex-col gap-3 mt-10">
      <div className="flex items-center gap-4">
        <div>
          <ProfilePhoto />
        </div>
        <div>
          <h1 className="poppins-semibold">{recommenderName}</h1>
          <div>
            <div className="flex items-center gap-4 poppins">
              <div className="flex gap-2 justify-center">
                <MdOutlineDateRange size={20} />
                <p>{creationDate}</p>
              </div>
              <div className="flex gap-2 justify-center">
                <MdAccessTime size={20} />
                <p>{creationTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="poppins-regular text-xl">{title}</h1>
      <div className="flex gap-5 ">
        <div>
          <img
            className="w-full h-30 rounded-2xl"
            src={productImageURL}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="poppins-semibold">
            Recommended:{" "}
            <span className="text-primary">{recommendProductName}</span>
          </p>
          <p>{recommendationReason}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommCard;