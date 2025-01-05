import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";
import { Button, Navbar as dropdown, NavbarCollapse } from "flowbite-react";
import Dropdown from "./Dropdown";

function Navbar() {
  const { user, logOut } = useAuthContext();
  const color = "bg-orange-400 text-white";
  const padding = "px-4 py-2 rounded-lg";

  function handleLogout() {
    logOut();
  }

  return (
    <div className="bg-[url('/n-1.png')] bg-no-repeat bg-cover ">
      <div className="w-[90%]  lg:w-[80%] mx-auto flex justify-between items-center gap-6 py-6  ">
        <div>
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="/logo.png"
            alt=""
          />
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-center items-center gap-6 rounded-xl  ">
            <NavLink
              className={({ isActive }) => ` ${padding} ${isActive && color}`}
              to={"/"}
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) => `${padding} ${isActive && color}`}
              to={"/donationcampign"}
            >
              Donation Campaigns
            </NavLink>
            <NavLink className={({ isActive }) => `${padding} `}>
              How to Help
            </NavLink>
            <NavLink
              className={({ isActive }) => `${padding} ${isActive && color}`}
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => `${padding} ${isActive && color}`}
              to={"/auth/signup"}
            >
              Register
            </NavLink>
            {user && (
              <button onClick={handleLogout} className="btn">
                LogOut
              </button>
            )}
          </div>
        </div>
        <div>
          {user ? (
            <div className=" translate-x-5 md:translate-x-2 lg:translate-x-0">
              {user?.email && (
                <img
                  className="w-[40px] h-[40px] rounded-full object-center "
                  src={`${user?.photoURL}`}
                />
              )}
            </div>
          ) : (
            <div className="translate-x-10 md:translate-x-2 lg:translate-x-0">
              <NavLink
                className={({ isActive }) => `${padding} ${isActive && color}`}
                to={"/auth/login"}
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* for responsive navmenu */}
        <div className="lg:hidden">
          <Dropdown />
        </div>

        {/* for responsive navemenu ends */}
      </div>
    </div>
  );
}

export default Navbar;
