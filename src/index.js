import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
// import registerServiceWorker from './registerServiceWorker';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
const AsyncLanding = asyncComponent(() => import('./Landing'));
const AsyncOtherPage = asyncComponent(() => import('./OtherPage'));

const Routes = ({ childProps }) =>
  <Switch>
    <Route
      path="/"
      exact
      component={AsyncLanding}
      props={childProps}
    />
    <Route
      path="/other-page"
      exact
      component={AsyncOtherPage}
      props={childProps}
    />
  </Switch>


ReactDOM.render(<Router><Routes /></Router>, document.getElementById('root'));
// registerServiceWorker();
