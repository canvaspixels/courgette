import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

it('renders without crashing', () => {
  const div = global.document.createElement('div');
  ReactDOM.render(<Router><HomePage /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
