import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Preferences from "./components/pages/Preferences";
import Food from "./components/pages/Food";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/preferences" component={Preferences} />
        <Route exact path="/food" component={Food} />
      </div>
    </Router>
  );
}

export default App;
