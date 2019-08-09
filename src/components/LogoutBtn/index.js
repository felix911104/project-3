import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function LogoutBtn(props) {
  return (
    
    <button className="btn btn-outline-primary" {...props}>Logout</button>
  
  );
}

export default LogoutBtn;
