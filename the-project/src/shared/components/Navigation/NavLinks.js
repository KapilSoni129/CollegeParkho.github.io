import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>All Users</NavLink>
    </li>
    <li>
      <NavLink to="/u1/college">My College</NavLink>
    </li>
    <li>
      <NavLink to="/college/new">Add Review</NavLink>
    </li>
    <li>
      <NavLink to="/auth">Authenticate</NavLink>
    </li>
  </ul>
};

export default NavLinks;