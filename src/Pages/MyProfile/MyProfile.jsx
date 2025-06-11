import React from "react";
import { responsive } from "../../Layouts/RootLayout";
import { NavLink, Outlet } from "react-router";

const MyProfile = () => {
    const navItems = [
      { name: "Profile", link: "/myprofile/profile" },
      { name: "Activity", link: "/myprofile/activity" },
      { name: "Settings", link: "/myprofile/settings" },
      { name: "Privacy", link: "/myprofile/privacy" },
    ];
      
  return (
    <section className={`${responsive} my-10`}>
      <div className="w-9/12 mx-auto border border-gray-300 rounded-xl shadow p-5 flex flex-col gap-5">
        <div className="rounded p-1 bg-gray-200 ">
          <nav>
            <ul className="grid grid-cols-4 gap-1">
              {navItems.map((item) => (
                  <NavLink
                      to={item.link}
                  className={`flex justify-center items-center bg-white py-1 text-gray-400 poppins ${(
                    isActive
                  ) => isActive && "bg-white text-black font-semibold"}`}
                >
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MyProfile;
