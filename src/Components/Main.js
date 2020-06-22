import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
    {/*<Route path="/projects" component={Projects} />*/}
  </Switch>
);

export default Main;
