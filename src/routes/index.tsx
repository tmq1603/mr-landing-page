import React from "react";
import { HashRouter as Router, Route, Switch, Redirect, withRouter,  } from 'react-router-dom'
import Home from '@/pages/Home'

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path={"/"}>
          <Redirect to="/home" />
        </Route>
        <Route path={'/home'} component={Home} />
      </Switch>
    </>
  );
}

const RoutesHistory = withRouter(Routes);

const routing = function createRouting() {
  return (
    <>
      <Router>
        <RoutesHistory />
      </Router>
    </>
  );
};

export default routing;
