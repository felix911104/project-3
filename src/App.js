import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Navbar/index";
import Home from "./components/pages/Home/index";
import Preferences from "./components/pages/Preferences/index";
import Food from "./components/pages/Food/index";
import SignIn from "./components/pages/SignIn/index";
import SignUp from "./components/pages/SignUp/index";
import SignUpContainer from "./components/SignUpContainer"
import SignInContainer from "./components/SignInContainer"
// import "../src/components/pages/style.css"

function App() {
  return (
   
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/signin" component={SignInContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
      </div>
    </Router>
  );
}

export default App;
