import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Jumbotron() {
    return (
        <div>
            <div id="cover">
                <div className="jumbotron jumbotron-fluid">
                    <div className="btn-group rightHeader">
                        <Link to="/login">
                            <button className="btn btn-outline-primary">Log-In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn btn-outline-primary">Sign-Up</button>
                        </Link>
                    </div>
                    <div className="btn-group leftHeader">
                        <Link to="/">
                            <button className="btn btn-outline-primary">Home</button>
                        </Link>
                        <Link to="/preferences">
                            <button className="btn btn-outline-primary">Preferences</button>
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
