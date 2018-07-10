import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const OtherPage = () => (
  <div className="Landing">
    <p className="Landing-intro">
      <Link to="/">Go to landing page</Link>
    </p>
  </div>
);

export default OtherPage;
