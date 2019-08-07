import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div>
      <div id="cover">
        <div className="jumbotron jumbotron-fluid">
          <div className="btn-group rightHeader">
            <a href="/login">
              <button className="btn btn-outline-primary">Log-In</button>
            </a>
            <a href="/signup">
              <button className="btn btn-outline-primary">Sign-Up</button>
            </a>
          </div>
          <div className="btn-group leftHeader">
            <a href="/">
              <button className="btn btn-outline-primary">Home</button>
            </a>
            <a href="/preferences">
              <button className="btn btn-outline-primary">Preferences</button>
            </a>
            <a href="/food">
              <button className="btn btn-outline-primary">Food</button>
            </a>
          </div>
          <div className="container">
            <h1
              className="title display-3 text-center"
              style={{ fontWeight: 100 }}
            >
              Shelt<strong style={{ fontWeight: 600 }}>R</strong>
            </h1>
            <p className="lead string-1 text-center"></p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Jumbotron;
