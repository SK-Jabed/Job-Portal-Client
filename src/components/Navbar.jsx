import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import AuthContext from "../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("Successfully Logged Out");
      })
      .catch((error) => {
        console.log("Failed to Logout");
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-bg-cyan-400"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/allJobs"}
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/myApplications"}
        >
          My Applications
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/addJob"}
        >
          Add A Job
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400"
          }
          to={"/myPostedJobs"}
        >
          My Posted Jobs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="bg-white">
        <div className="container mx-auto py-4">
          <div className="mx-auto flex justify-between items-center">
            <div className="dropdown lg:hidden relative ml-2">
              <div
                tabindex="0"
                role="button"
                className="btn border-2 p-3 border-solid rounded-full lg:hidden"
              >
                <HiMenuAlt1 className="text-xl font-bold" />
              </div>
              <ul
                tabindex="0"
                className="menu menu-sm dropdown-content bg-cyan-500 rounded-box z-[1] mt-3 w-52 p-4 shadow absolute left-0"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center gap-1">
              <h2 className="text-2xl font-bold text-cyan-600 ml-4 md:ml-0">
                WARMTH <span className="text-sky-400">CARE</span>
              </h2>
            </div>
            <div className="">
              <ul className="hidden lg:flex items-center justify-center gap-6">
                {navLinks}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3">
                {user && user.email ? (
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="group flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                  >
                    <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                      Logout
                    </div>
                  </button>
                ) : (
                  <div>
                    <Link to={"/auth/register"}>Register</Link>
                    <Link
                      to={"/auth/login"}
                      type="button"
                      className="group flex h-14 w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                    >
                      <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                        Login
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
