import React from 'react';
import { Link } from 'react-router-dom';
// import './HomePage.css';
import Banner from './Banner';

const OtherPage = () => (
  <div className="Home">
    <Banner />
    <h1>Other page</h1>
    <p className="Home-intro">
      <Link to="/" data-test="go-to-home-link">Go to Home page</Link>
    </p>
    <p>Some content on the other page</p>
  </div>
);

export default OtherPage;
