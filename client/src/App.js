import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage/LandingPage.jsx";
import NavBar from "./components/Navbar/Navbar.jsx";
import Home from "./containers/Home/Home.jsx";
import Search from "./containers/Search/Search";
import VideogameDetail from "./containers/VideogameDetail/VideogameDetail.jsx";
import Create from "./containers/Create/Create.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Route exact path="/" component={LandingPage} />

        <Route path="/home" component={NavBar} />
        <Route exact path="/home" component={Home} />

        <Route path="/results" component={NavBar} />
        <Route exact path="/results/:name" component={Search} />

        <Route path="/videogames" component={NavBar} />
        <Route exact path="/videogames/:id" render={({ match }) => <VideogameDetail id={match.params.id} /> }/>

        <Route path="/create" component={NavBar} />
        <Route path="/create" exact component={Create} />

        <Route path="/about" component={NavBar} />
        <Route path="/about" component={AboutMe} />
      </React.Fragment>
    </div>
  );
}

export default App;
