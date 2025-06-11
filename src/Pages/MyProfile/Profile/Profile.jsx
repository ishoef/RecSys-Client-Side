import React, { use } from "react";
import Button from "../../../Components/Button/Button";
import { FaRegEdit, FaRegUser } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { AuthContext } from "../../../Context/AuthProvider";
import ProfilePhoto from "../../../Components/ProfilePhoto/ProfilePhoto";
import ProfileInformation from "./ProfileInformation/ProfileInformation";

const Profile = () => {
  const { user } = use(AuthContext);

  const date = new Date(user.metadata.creationTime);
  const formatted = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  console.log("Joined Date:", formatted);
  console.log("Joined Time:", formattedTime);


  console.log(user.displayName);
  const btnText = (
    <div className="flex items-center gap-2 text-[18px]">
      <p>
        <FaRegEdit />
      </p>
      <p> Edit Profile</p>{" "}
    </div>
  );

  const btnClass = " bg-transparent border border-gray-400 btn rounded-md hover:bg-primary hover:text-white";
  return (
    <>
      <div className="p-5 w-full h-full flex flex-col gap-6 justify-center items-center border border-gray-300 rounded-xl shadow">
        {/* Profile Informations */}
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-2 text-2xl poppins-semibold">
            <LuUser />
            <h1>Profile Information</h1>
          </div>
          <Button className={btnClass} text={btnText} />
        </div>

        <div className="grid grid-cols-6 gap-10 w-full">
          <div className="col-span-2 gap-2 flex flex-col items-center">
            <ProfilePhoto
              className={"w-48 rounded-full border-2 border-green-600"}
            />
            <h1 className="text-2xl font-semibold poppins text-center">{user.displayName}</h1>
            <p className="poppins">Joined Since { formatted }</p>
            <p className="poppins">At { formattedTime }</p>
          </div>
          <div className="col-span-4 ">
            <ProfileInformation/>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full h-full flex justify-center items-center border border-gray-300 rounded-xl shadow">
        Cards
      </div>

      {/* Quic Actions */}
      <div className="w-full h-full flex justify-center items-center border border-gray-300 rounded-xl shadow">
        Quick Actions
      </div>
    </>
  );
};

export default Profile;
