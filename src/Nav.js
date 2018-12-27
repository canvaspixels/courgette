import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  state = {}

  render() {
    const { showMenu } = this.state;
    return (
      <div className={`nav ${showMenu && 'show'}`}>
        <header>
          <button type="button" onClick={() => this.setState({showMenu: true})}>burger</button>
        </header>
        <div className="overlay" onClick={() => this.setState({showMenu: false})}>
          <div className="overlay-inner" />
        </div>
        <div className="main-nav">
          <button type="button" className="close-btn" onClick={() => this.setState({showMenu: false})}>Close</button>
          <ul>
            <li>Test</li>
            <li>Test 123</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
