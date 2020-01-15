import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.css';

export default function Header() {
  return (
    <div className="header-wrapper container-fluid">
      <div className="header-content">
        <img src="/assets/logo-color.jpg" alt="" className="header-image" />
      </div>
      <div className="navigation-buttons">
        <Link className="navigation-button" to="/">
          Instructions
        </Link>
        <Link className="navigation-button" to="/search">
          Challenge
        </Link>
      </div>
    </div>
  );
}
