import React from "react";
import { Link } from "react-router-dom";
import "./../Styles/SidebarContent.css";

// Sidebar content imported in App.js
const SidebarContent = () => {
  return (
    <div className="sideWrapper">
      <div className="discover">Discover</div>
      <div className="divider"></div>
      <ul className="navWrapper">
        <li className="navItem">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link className="link" to="/Images">
            Images
          </Link>
        </li>
        <li className="navItem">
          <Link className="link" to="/MyProfile">
            My Profile
          </Link>
        </li>
        <li className="navItem">
          <Link className="link" to="/Rating">
            Rating
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarContent;
