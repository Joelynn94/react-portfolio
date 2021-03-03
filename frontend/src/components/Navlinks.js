import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = ({ isOpen }) => {

  return (
    <ul className={isOpen ? "navigation-mobile" : "navigation-ul"}>
      <Link to="/blog">Blog</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </ul>
  );
};

export default NavLinks;
