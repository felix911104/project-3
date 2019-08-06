import React from "react";
import "./style.css";

function LogIn(){
    
  return(
      <div className="wrapper">
  <div className="form form-signup">
    <div className="form--title">
      sign up
    </div>
    <form>
      <div className="form--inputContainer js-input">
        <label htmlFor="input_fullName" className="form--label">full name</label>
        <input id="input_fullName" className="js-input-fullName" type="text" />
      </div>
      <div className="form--inputContainer js-input">
        <label htmlFor="input_email" className="form--label">email</label>
        <input id="input_email" className="js-inputEmail" type="email" />
        <span className="form--notice form--suggestEmail">Did you mean <span className="js-suggestedEmail" />?</span>
      </div>
      <div className="form--inputContainer js-input">
        <label htmlFor="input_password" className="form--label">password</label>
        <input id="input_password" className="js-inputPassword" type="password" />
        <span className="form--notice form--passwordNotice js-passwordNotice">Your password needs to be at least <span>6</span> characters long.</span>
      </div>
      <div className="form--inputContainer">
        <input type="submit" defaultValue="sign up" />
        <div className="form--notice">By signing up you agree to the <a href="/">terms of service</a> and <a href="/">privacy policy</a>.</div>
      </div>
    </form>
  </div>
</div>


    )
}
export default LogIn;