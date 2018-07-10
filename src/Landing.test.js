import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

it('renders without crashing', () => {
  const div = global.document.createElement('div');
  ReactDOM.render(<Landing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
