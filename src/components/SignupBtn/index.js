import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SignupBtn(props) {
  return (
    <Link to="/signup">
    <button className="btn btn-outline-primary" {...props}>Signup</button>
  </Link>
  );
}

export default SignupBtn;
