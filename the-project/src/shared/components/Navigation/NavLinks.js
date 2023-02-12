import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';
import { AuthContext } from '../../context/auth-context';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>All Users</NavLink>
    </li>
    {auth.isLogIn && (<li>
      <NavLink to="/u1/college">My College</NavLink>
    </li>)}
    {auth.isLogIn && (<li>
      <NavLink to="/college/new">Add Review</NavLink>
    </li>)}
    {auth.isLogIn && (<li>
      <NavLink to="/auth" onClick={auth.logout} >Log Out</NavLink>
    </li>)}
    {!auth.isLogIn && (<li>
      <NavLink to="/auth">Authenticate</NavLink>
    </li>)}
  </ul>
};

export default NavLinks;