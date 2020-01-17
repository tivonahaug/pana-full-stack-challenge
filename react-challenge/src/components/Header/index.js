import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.style.css';

export default function Header() {
  return (
    <div className="header-wrapper container-fluid">
      <div className="header-content">
        <img src="/assets/logo-color.jpg" alt="" className="header-image" />
      </div>
      <div className="navigation-buttons">
        <NavLink
          exact={true}
          activeClassName="navigation-button--active"
          className="navigation-button"
          to="/"
        >
          Instructions
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="navigation-button--active"
          className="navigation-button"
          to="/search"
        >
          Challenge
        </NavLink>
      </div>
    </div>
  );
}
