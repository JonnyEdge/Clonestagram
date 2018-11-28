import React from 'react';
import '../styles/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
// class NavBar extends React.Component {
//   render() {
//     return (
//       <div className="navbar">
//         <h1><FontAwesomeIcon icon="camera-retro" />  Clonestagram</h1>
//         <ul className="nav">
//           <Link className="item" to="/">Feed</Link>
//           <Link className="item" to="/upload">Upload</Link>
//           <Link className="item" to="/login">Login</Link>
//           <Link className="item" to="/sign-up">Sign Up</Link>
//         </ul>
//       </div>
//     );
//   }
// }

const NavBar = ({ user, isLoggedIn, onLogout }) => (

  <div className="navbar">
    <h1><FontAwesomeIcon icon="camera-retro" />  Clonestagram</h1>
    <ul className="nav">
      <Link className="item" to="/">Feed</Link>
      {/* <Link className="item" to="/upload">Upload</Link> */}
      <Link className="item" to="/login">Login</Link>
      <Link className="item" to="/sign-up">Sign Up</Link>
    </ul>
    {
      isLoggedIn && (
        <div className="loggedin">
          <span>{user.firstName} {user.lastName}</span>
          <button id="logoutbutton" onClick={onLogout}>Logout</button>
        </div>
      )}
  </div>

);

export default NavBar;
