import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../provider/AuthProvider";

function Dropdown() {
  const { user, logOut } = useAuthContext();
  const color = "bg-orange-400 text-white";
  const padding = "rounded-lg";

  function handleLogout() {
    logOut();
  }

  return (
    <details className="dropdown  text-sm lg:hidden   flex-none translate-x-4  box-border z-40">
      <summary className="btn bg-white bg-opacity-0 border-none rounded-none shadow-none">
        <div className="btn rounded-full w-12 h-12 bg-white bg-opacity-0 border-stone-100">
          <img
            className="w-[30px] h-[30px] object-contain"
            src="https://img.icons8.com/ios-filled/100/menu--v1.png"
            alt=""
          />
        </div>
      </summary>
      <ul className="menu w-[6.25rem]  text-xs dropdown-content bg-base-100 rounded-box z-[1]  -translate-x-8  shadow -px-4 ">
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/"}
          >
            HOME
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `   ${padding} ${isActive && color}`}
            to={"/donationcampign"}
          >
            Campaigns
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink className={({ isActive }) => `${padding} `}>
            How to Help
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/auth/signup"}
          >
            Register
          </NavLink>
        </li>
        <li className="max-w-full">
          {user ? (
            <button onClick={handleLogout} className="">
              LogOut
            </button>
          ) : (
            <NavLink
              className={({ isActive }) => `${padding} ${isActive && color}`}
              to={"/auth/login"}
            >
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </details>
  );
}

export default Dropdown;
