import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Banner from './Banner';
import Footer from './Footer';

const OtherPage = () => (
  <div id="Simple-Page-Wrapper">
    <Banner />
    <h1 className="main-heading">Simple page</h1>
    <p><label>Name <input type="text" name="fullname" data-test="fullname" /></label></p>
    <p><label>Email <input type="text" name="email" data-test="email" defaultValue="hi@hello.com" /></label></p>
    <p className="Home-intro">
      <Link to="/" data-test="go-to-home-link">Go to Home page</Link>
    </p>
    <Footer />
  </div>
);

export default OtherPage;
