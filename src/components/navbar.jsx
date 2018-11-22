import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1><FontAwesomeIcon icon="camera-retro" />  Clonestagram</h1>
        <ul className="nav">
          <Link className="item" to="/">Feed</Link>
          <Link className="item" to="/upload">Upload</Link>
          <Link className="item" to="/login">Login</Link>
        </ul>
      </div>
    );
  }
}

export default NavBar;
