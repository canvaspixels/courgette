import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
const AsyncHomePage = asyncComponent(() => import('./HomePage'));
const AsyncOtherPage = asyncComponent(() => import('./OtherPage'));
const AsyncSimplePage = asyncComponent(() => import('./SimplePage'));

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
    <Route
      path="/simple-page"
      exact
      component={AsyncSimplePage}
      props={childProps}
    />

    {/* another-simple-page is another route to tests a page object with a path */}
    <Route
      path="/another-simple-page"
      exact
      component={AsyncSimplePage}
      props={childProps}
    />
  </Switch>


ReactDOM.render(<Router><Routes /></Router>, document.getElementById('root'));
