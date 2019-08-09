import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home/index";
import Preferences from "./components/pages/Preferences/index";
import Food from "./components/pages/Food/index";
// import NavTabs from "./components/Navbar/index";
import SignUp from "./components/pages/SignUp/index";
import LogIn from "./components/pages/Login/index";
import Shelters from "./components/pages/Shelters/index";
import Clinics from "./components/pages/Clinic/index";
// import "../src/components/pages/style.css"


function App() {
  return (
   
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/clinics" component={Clinics} />
        <Route exact path="/shelters" component={Shelters} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />

      </div>
    </Router>
  );
}

export default App;
