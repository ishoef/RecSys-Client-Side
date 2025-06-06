import React from "react";
import Logo from "../Logo/Logo";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import { NavLink } from "react-router";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <>
      <header className="py-5 bg-white/20 backdrop-blur-md shadow">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-between items-center ">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-5 poppins-semibold  ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/queries"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  Queries
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/recforme"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  Recommendations For Me
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myqueries"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  My Queries
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myrecos"
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                      : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                  }
                >
                  My Recommendations
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            {/* login & Logout Button */}
            {user ? (
              <button className="hidden lg:block btn btn-primary">
                Log Out
              </button>
            ) : (
              <Link to="/auth/login">
                <button className="btn btn-primary text-[16px] ">Login</button>
              </Link>
            )}
            <ProfilePhoto tooltip={true} user={user} To="/myprofile" />

            {/* Small Device Dropdown Menu */}
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn m-1">
                <TiThMenu />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-4 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/queries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Queries
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recforme"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    Recommendations For Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myqueries"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Queries
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myrecos"
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-2 bg-base-300 text-primary px-4 pb-2 pt-1 rounded"
                        : "bg-none px-4 pb-2 pt-1 rounded hover:text-primary"
                    }
                  >
                    My Recommendations
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
