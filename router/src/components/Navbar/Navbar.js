import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className="header__nav">
      <div className="nav__content">
        <h2 className="logo">Newton School</h2>
        <nav>
          <ul className="nav__list">
            <NavLink to={'/home'}>
              <li>Home</li>
            </NavLink>

            <NavLink to={'/courses'}>
              <li>Courses</li>
            </NavLink>
            
            <NavLink to={'/about'}>
              <li>About</li>
            </NavLink>

            <NavLink to={'/jobs'}>
              <li>Jobs</li>
            </NavLink>

            <NavLink to={'/blog'}>
              <li>Blog</li>
            </NavLink>
      
          </ul>
        </nav>
      </div>
      <div className="header__buttons">
          <div className="btn btn-login">Login</div>
          <div className="btn btn-signup">Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
