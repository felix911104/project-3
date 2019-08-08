import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home/index";
import Preferences from "./components/pages/Preferences/index";
import Food from "./components/pages/Food/index";
import NavTabs from "./components/Navbar/index";
import SignUp from "./components/pages/SignUp/index";
import LogIn from "./components/pages/Login/index";
// import "../src/components/pages/style.css"


function App() {
  return (
   
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/food" component={Food} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
 
      </div>
    </Router>
  );
}

export default App;
