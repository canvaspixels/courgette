import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    const { showMenu } = this.props;
    return (
      <div className={`nav ${showMenu && 'show'}`}>
        <header>
          <button type="button" onClick={this.setState({showMenu: true})}>burger</button>
        </header>
        <div className="overlay">
          <div className="over-inner" />
        </div>
        <div className="main-nav">
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
