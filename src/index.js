import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
const AsyncHomePage = asyncComponent(() => import('./HomePage'));
const AsyncOtherPage = asyncComponent(() => import('./OtherPage'));

const Routes = ({ childProps }) =>
  <Switch>
    <Route
      path="/"
      exact
      component={AsyncHomePage}
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
