import React from 'react';
import SignUpContainer from "./components/SignUpContainer"



function App() {
    return (
      
        <SignUpContainer />
    )
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar/index";
import Home from "./components/pages/Home/index";
import Preferences from "./components/pages/Preferences/index";
import Food from "./components/pages/Food/index";
import SignIn from "./components/pages/SignIn/index";
import SignUp from "./components/pages/SignUp/index";
// import "../src/components/pages/style.css"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
