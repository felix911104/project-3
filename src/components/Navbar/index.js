import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavTabs() {
  return (
    <div className="btn-group jumbotron-fluid">
        <Link to="/">
          <button className="btn btn-outline-primary">Home</button>
        </Link>
     
        <Link to="/food">
          <button className="btn btn-outline-primary">Food</button>
        </Link>
        <Link to="/shelters">
          <button className="btn btn-outline-primary">Shelters</button>
        </Link>
        <Link to="/clinics">
          <button className="btn btn-outline-primary">Clinics</button>
        </Link>
      </div>
  );
 
}

export default NavTabs;
