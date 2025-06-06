import React from 'react';
import ProfilePhoto from '../ProfilePhoto/ProfilePhoto';
import { MdOutlineDateRange } from 'react-icons/md';

const RecommCard = ({ details }) => {
  const {
    userName,
    createdAt,
    queryTitle,
    productName,
    productImageUrl,
    boycottingReason,
  } = details;
  return (
    <div className=" border border-gray-400 shadow-xl rounded-2xl px-8 py-8 flex flex-col gap-3 mt-10">
      <div className="flex items-center gap-4">
        <div>
          <ProfilePhoto />
        </div>
        <div>
          <h1 className="poppins-semibold">{userName}</h1>
          <div>
            <p className="flex items-center gap-2 poppins-regular">
              {" "}
              <MdOutlineDateRange size={18} />
              {createdAt}
            </p>
          </div>
        </div>
      </div>
      <h1 className='poppins-regular text-xl'>{queryTitle}</h1>
      <div className="flex gap-5 ">
        <div>
          <img
            className="w-full h-30 rounded-2xl"
            src={productImageUrl}
            alt=""
          />
        </div>
        <div className='flex flex-col gap-2'>
          <p className="poppins-semibold">
            Recommended: <span className="text-primary">{productName}</span>
          </p>
          <p>{boycottingReason}</p>
        </div>
      </div>
    </div>
  );
};

export default RecommCard;