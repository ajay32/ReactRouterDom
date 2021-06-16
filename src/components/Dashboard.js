import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Dashboard </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/contact/inner'} className="nav-link">Contact Inner</Link></li>
          </ul>
          </nav>
        </div>
    );
  }
}

export default Dashboard;