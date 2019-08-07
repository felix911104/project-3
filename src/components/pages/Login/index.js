import React from "react";
import "./style.css";

function LogIn(){
    
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
      <h4>Not Registered?<a href="/signup"> Create an Account</a></h4>
    </form>
  </div>
</div>


  
  
</div>


    )
}
export default LogIn;