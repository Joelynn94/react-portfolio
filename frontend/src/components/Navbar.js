import React, { useState } from 'react';

import Logo from "./Logo";
import NavIcon from './NavIcon';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navigation">
      <Logo />
      <NavIcon toggle={toggle} isOpen={isOpen} />
      <NavLinks isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
