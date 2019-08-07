import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/pages/Home/index";
import Preferences from "./components/pages/Preferences/index";
import Food from "./components/pages/Food/index";
// import NavTabs from "./components/Navbar/index";
import SignUp from "./components/pages/SignUp/index";
<<<<<<< HEAD
import SignUpContainer from "./components/SignUpContainer"
=======
import LogIn from "./components/pages/Login/index";
>>>>>>> front-day1
// import "../src/components/pages/style.css"

function App() {
  return (
    // <SignUpContainer />
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </div>
    </Router>
  );
}

export default App;
