import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="w-full min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
