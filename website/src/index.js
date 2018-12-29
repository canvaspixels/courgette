import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import 'focus-visible/dist/focus-visible.min.js'
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
const AsyncHomePage = asyncComponent(() => import('./HomePage'));
const APIPage = asyncComponent(() => import('./APIPage'));
const GettingStarted = asyncComponent(() => import('./GettingStarted'));
// const AsyncWebComponentsPage = asyncComponent(() => import('./WebComponentsPage'));
// const AsyncSimplePage = asyncComponent(() => import('./SimplePage'));

const Routes = ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={AsyncHomePage} props={childProps} />
    <Route path="/api" exact component={APIPage} props={childProps} />
    <Route path="/getting-started" exact component={GettingStarted} props={childProps} />
  </Switch>


ReactDOM.render(<Router><Routes /></Router>, document.getElementById('root'));
