import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link className="navbar-brand" to="/">
            Joseph Lynn
          </Link>
        </div>
        <div className="navbar-list">
          <ul className="navbar-ul">
            <li className="navbar-item">
              <i className="fal fa-home-alt"></i>
              <Link className="navbar-link" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <i className="fal fa-briefcase"></i>
              <Link className="navbar-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="navbar-item">
              <i className="fal fa-address-card"></i>
              <Link className="navbar-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
