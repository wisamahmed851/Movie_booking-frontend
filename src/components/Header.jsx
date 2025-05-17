import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-section">
      <div className="container mx-auto px-4">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/">
              <img src="/frontend/images/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="#0" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#0">movies</Link>
            </li>
            <li>
              <Link to="#0">events</Link>
            </li>
            <li>
              <Link to="#0">sports</Link>
            </li>
            <li>
              <Link to="#0">pages</Link>
            </li>
            <li>
              <Link to="#0">blog</Link>
            </li>
            <li>
              <Link to="/contact.html">contact</Link>
            </li>
            <li className="header-button pr-0">
              <Link to="/sign-up.html">join us</Link>
            </li>
          </ul>
          <div className="header-bar block lg:hidden">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
