import React from "react";
import {
  FaSistrix,
  FaTelegramPlane,
  FaRegCompass,
  FaRegHeart,
} from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { ContextProvider } from "../Global/Context";
const Navbar = () => {
  const { model, openModel, user, loader, logout } = React.useContext(
    ContextProvider
  );
  console.log("my model", model);
  const openForms = () => {
    openModel();
  };
  const userLogout = () => {
    logout();
  };
  const checkUser = () => {
    return !loader ? (
      !loader && user ? (
        <li>
          {user.displayName}<span onClick={userLogout}>
              <img src="/images/rl.png"className="logout"/>
              </span>{" "}
        </li>
      ) : (
        <li onClick={openForms}>
                Login
        </li>
      )
    ) : (
      "Loading..."
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/instagramLogo.png" alt="" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <MdHome className="navbar__icons" />
        </li>
        <li>
          <FaTelegramPlane className="navbar__icons" />
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
        {checkUser()}
      </div>
    </div>
  );
};

export default Navbar;