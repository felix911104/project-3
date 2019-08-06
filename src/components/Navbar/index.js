import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/preferences"
          className={window.location.pathname === "/preferences" ? "nav-link active" : "nav-link"}
        >
          Preferences
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/food"
          className={window.location.pathname === "/food" ? "nav-link active" : "nav-link"}
        >
          Food
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signin"
          className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signup"
          className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;