import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LogoutBtn from "../LogoutBtn";
import SignupBtn from "../SignupBtn";
import LoginBtn from "../LoginBtn";

import PreferencesBtn from "../preferencesBtn";

class Jumbotron extends Component {
  state = {
    food: [],
    userId: "-1"
  };

  componentDidMount() {
    this.checkToken()

  }

  checkToken = () => {
    let userId = parseInt(localStorage.getItem("sheltrUserId"))
    let expireTime = localStorage.getItem("sheltrExpireTime")
    expireTime = new Date(expireTime)
    if (!userId) {
      return;
    }
    else if (userId < 0) {
      return;
    }
    else if (expireTime > new Date()) {
      this.setState({
        userId: userId
      }, () => {


    render(){
        let loggedIn = this.state.userId !== "-1";
       
      return (
        <div>
            <div id="cover">
                <div className="jumbotron jumbotron-fluid">
                    <div className="btn-group rightHeader">
                    <LogoutBtn  hidden={!loggedIn} onClick={() => this.logout()} /> <PreferencesBtn hidden={!loggedIn} /><LoginBtn hidden={loggedIn}/> <SignupBtn hidden={loggedIn}/>
                    </div>
                    <div className="btn-group leftHeader">
                        <Link to="/">
                            <button className="btn btn-outline-primary">Home</button>
                        </Link>
                        {/* <Link to="/preferences">

                            <button className="btn btn-outline-primary">Preferences</button>
                        </Link> */}
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
            <div className="container">
              <h1 className="title display-3 text-center" style={{ fontWeight: 100 }}>
                Shelt<strong style={{ fontWeight: 600 }}>R</strong>
              </h1>
              <p className="lead string-1 text-center"></p>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default Jumbotron;
