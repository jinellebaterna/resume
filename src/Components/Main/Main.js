import React from "react";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Home from "../Home/Home";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
