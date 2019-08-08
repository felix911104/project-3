import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavTabs() {
  return (
    <div className="btn-group jumbotron-fluid">
        <Link to="/">
          <button className="btn btn-outline-primary">Home</button>
        </Link>
        <Link to="/preferences">
          <button className="btn btn-outline-primary">Preferences</button>
        </Link>
        <Link to="/food">
          <button className="btn btn-outline-primary">Food</button>
        </Link>
      </div>
  );
 
}

export default NavTabs;
