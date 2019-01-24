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
const FAQs = asyncComponent(() => import('./FAQs'));
const BDD = asyncComponent(() => import('./BDD'));
// const AsyncWebComponentsPage = asyncComponent(() => import('./WebComponentsPage'));
// const AsyncSimplePage = asyncComponent(() => import('./SimplePage'));

const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

document.body.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('copy-code-btn')) {
    const el = ev.target;
    el.innerHTML = 'Copied &#x2713';
    const text = el.parentElement.querySelector('.js-to-copy').innerText;
    copyToClipboard(text);
    setTimeout(() => { el.innerHTML = 'Copy' }, 5000);
  }
});

const Routes = ({ childProps }) =>
  <Switch>
    <Route path="/courgette/" exact component={AsyncHomePage} props={childProps} />
    <Route path="/courgette/api" exact component={APIPage} props={childProps} />
    <Route path="/courgette/getting-started" exact component={GettingStarted} props={childProps} />
    <Route path="/courgette/faqs" exact component={FAQs} props={childProps} />
    <Route path="/courgette/bdd" exact component={BDD} props={childProps} />
  </Switch>

ReactDOM.render(<Router><Routes /></Router>, document.getElementById('root'));
