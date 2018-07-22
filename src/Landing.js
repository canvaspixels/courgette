import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => (
  <div className="Landing">
    <h1>Home page</h1>
    <p className="Landing-intro">
      <Link to="/other-page" data-test="rr-link">Go to other page by react router</Link>
    </p>
    <p><a href="/other-page" data-test="other-page-link">Go to other page with full page load</a></p>
    <p><a href="/other-page" data-test="other-page-link-new-tab" target="_blank">Go to other page in new tab</a></p>

    <form action="">
      <div><label>Name <input type="text" name="fullname" /></label></div>
      <div>
        <label>Age
          <select name="age" data-test="age">
            <option value="18-25">18-25</option>
            <option value="26+">26+</option>
          </select>
        </label>
      </div>
      <fieldset>
        <legend>Gender</legend>
        <label>
          <input type="radio" name="gender" value="male" checked onChange={() => {}} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="other" />
          Other
        </label>
      </fieldset>
      <div>
        <label>
          <input type="checkbox" name="newsletter-uncheck" value="true" checked onChange={() => {}} />
          Uncheck if you don’t wish to not receive the newsletter
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="you-ok" value="ok" />
          Are you ok? Tick the box if so
        </label>
      </div>
    </form>
  </div>
);

export default Landing;
