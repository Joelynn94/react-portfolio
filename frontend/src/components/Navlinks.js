import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = ({ isOpen }) => {
  return (
    <ul className={isOpen ? "navigation-mobile" : "navigation-ul"}>

      <Link to="/blog">Blog</Link>


      <Link to="/skills">Skills</Link>


      <Link to="/blog">Portfolio</Link>

      <Link to="/blog">Contact</Link>

    </ul>
  );
};

export default NavLinks;
