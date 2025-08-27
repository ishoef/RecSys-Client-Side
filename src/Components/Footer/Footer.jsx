import React from "react";
import Logo from "../Logo/Logo";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 py-10 text-gray-200 dark:text-gray-300">
      <div className="flex flex-col w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col gap-12 flex-1 md:flex-row justify-between items-start">
          {/* Left Content */}
          <div className="flex flex-col gap-4 basis-2/6">
            <Logo />
            <p className="text-[18px] poppins-regular text-gray-300 dark:text-gray-400">
              A community-driven platform for product recommendations. Find
              better alternatives to products and make informed purchasing
              decisions.
            </p>
            {/* Icons */}
            <div className="icons flex items-center gap-4 text-2xl text-gray-300 dark:text-gray-400">
              <FaFacebook className="hover:text-primary transition-colors" />
              <FaYoutube className="hover:text-red-500 transition-colors" />
              <FaLinkedin className="hover:text-blue-500 transition-colors" />
              <FaGithub className="hover:text-white transition-colors" />
              <FaInstagramSquare className="hover:text-pink-500 transition-colors" />
            </div>
          </div>

          {/* Middle content */}
          <div>
            <nav>
              <ul className="flex flex-col gap-5 poppins-semibold">
                <li className="text-primary border-b-2 w-fit">Quick Links</li>
                {[
                  { name: "Home", path: "/" },
                  { name: "Queries", path: "/queries" },
                  { name: "Recomms For Me", path: "/recforme" },
                  { name: "My Queries", path: "/myqueries" },
                  { name: "My Recommes", path: "/myrecos" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "border-b-2 bg-gray-800 dark:bg-gray-700 text-primary px-4 pb-2 pt-1 rounded"
                          : "px-4 pb-2 pt-1 rounded hover:text-primary hover:bg-gray-800 dark:hover:bg-gray-700"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Content */}
          <div>
            <nav>
              <ul className="flex flex-col gap-5 poppins-semibold">
                <li className="text-primary border-b-2 w-fit">Resources</li>
                {[
                  "About Us",
                  "Privacy Policy",
                  "Terms of Service",
                  "Contact Us",
                ].map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={"/comming-soon"}
                      className="px-4 pb-2 pt-1 rounded hover:text-primary hover:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <hr className="mt-10 border-gray-700 dark:border-gray-600" />
        <div className="text-center pt-10 text-gray-400 dark:text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} - Developed by{" "}
            <span className="poppins-semibold text-primary underline">
              <a
                href="https://portfolio-rose-two-uimck3sec9.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ismail Nayef
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
