import React from "react";
import Resume from "./Resume/Resume";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
  </Switch>
);

export default Main;
