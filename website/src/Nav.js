import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import './nav.scss';

class Nav extends Component {
  state = {}
  // componentDidMount() {
  //   this.props.history.listen((location, action) => {
  //       // location is an object like window.location
  //       console.log(action, location.pathname, location.state)
  //   });
  // }

  render() {
    const { showMenu } = this.state;
    return (
      <div className={`nav ${showMenu && 'show'}`}>
        <header>
          <button type="button" onClick={() => this.setState({showMenu: true})} className="burger">Menu</button>
        </header>
        <p className="logo">Courgette</p>
        <div className="overlay" onClick={() => this.setState({showMenu: false})}>
          <div className="overlay-inner" />
        </div>
        <div className="main-nav">
          <button type="button" className="close-btn" onClick={() => this.setState({showMenu: false})}>Close</button>
          <ul>
            <li><NavLink to="/" activeClassName="selected" exact>Overview</NavLink></li>
            <li><NavLink to="/getting-started" activeClassName="selected">Getting Started</NavLink></li>
            <li><NavLink to="/api" activeClassName="selected">API</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
