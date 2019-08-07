import React from "react";
import "./style.css";

function SignUp(){
    
  return(
    <div>
    <div className="container">
  <div className="main">
    <div className="logo">
      <h1>S</h1>
    </div>
    <form action="/">
      <input type="text" placeholder="User Name" autoComplete="off" required />	<i className="fa fa-user" />
      <input type="password" placeholder="password" autoComplete="off" required />	<i className="fa fa-lock" />
      <input type="submit" defaultValue="Log In" />
      <h4>Already have an account?<a href="/login"> Go Login!</a></h4>
    </form>
  </div>
</div>


  
  
</div>


    )
}
export default SignUp;