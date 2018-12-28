import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css';
import Nav from './Nav';
import Footer from './Footer';

const CommonTemplate = ({ children }) => (
  <div>
    <Nav />
    <div class="main-container">
      { children }
    </div>
    <Footer />
  </div>
);

export default CommonTemplate;
