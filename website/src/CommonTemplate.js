import React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const CommonTemplate = ({ children, className }) => (
  <div>
    <Nav />
    <div className={className || 'main-container'}>
      { children }
    </div>
    <Footer />
  </div>
);

export default CommonTemplate;
