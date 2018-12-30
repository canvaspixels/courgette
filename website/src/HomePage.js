import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.scss';
import CommonTemplate from './CommonTemplate';

const APIPage = () => (
  <CommonTemplate className="home">
    <div>
      <section className="hero">
        Bringing sanity to <br /> UI test automation with selenium
      </section>
      <section className="usps">
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Gherkin Syntax</h2>
            <p>Automate Given When Then scenarios without writing any code</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Snippets / Live Templates</h2>
            <p>Installed straight to your favourite IDE* to enable quick and accurately writing of scenarios</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Screenshots</h2>
            <p>Taken on test failure to help debugging or taken on demand with image viewer</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Reporting</h2>
            <p>HTML and CLI reports for step definition usage, passes / failures</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Any platform</h2>
            <p>Runs on Windows, Mac and Linux</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Page / Component Objects</h2>
            <p>YAML-based Page and Component Objects aid in scaling up your test suite</p>
          </div>
        </div>
        <div className="usp">
          <div className="usp__icon"></div>
          <div className="usp__desc">
            <h2 className="usp__title">Selenium Grid</h2>
            <p>Easy integration with Sauce Labs & Browser Stack</p>
          </div>
        </div>

        <small>* snippets support the following IDEs: Intellij, Webstorm, Sublime Text, Textmate, Atom, VSCode</small>

      </section>
      <section className="testimonials">
        <div className="testimonial">
          <blockquote>
            <q>it comes with batteries included to some extent so you can get up and running quickly</q>
            <p>Dan North (creator of BDD)</p>
          </blockquote>
        </div>
        <div className="testimonial">
          <blockquote>
            <q>I instantly get it, it’s like a DSL that everyone can read and understand</q>
            <p>Anonymous, Capital One</p>
          </blockquote>
        </div>
      </section>
      <section className="customers">
        <h2>Companies using Courgette</h2>
        <div className="customer">
          Capital One
        </div>
        <div className="customer">
          Swoop
        </div>
        <div className="customer">
          Linklaters
        </div>
        <div className="customer">
          Amazon
        </div>
        <div className="customer">
          lastminute.com
        </div>
      </section>
    </div>
  </CommonTemplate>
);

export default APIPage;
