import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const OtherPage = () => (
  <div className="Landing">
    <h1>Other page</h1>
    <p className="Landing-intro">
      <Link to="/" data-test="go-to-home-link">Go to landing page</Link>
    </p>
  </div>
);

export default OtherPage;
