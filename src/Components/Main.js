import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
