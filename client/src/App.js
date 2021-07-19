import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./containers/Home/Home.jsx";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/home" component={Home} />
      </React.Fragment>
    </div>
  );
}

export default App;
