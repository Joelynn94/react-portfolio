import React from 'react';

const NavLinks = ({ isOpen }) => {

  return (
    <ul className={isOpen ? "navigation-mobile" : "navigation-ul"}>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </ul>
  );
};

export default NavLinks;
