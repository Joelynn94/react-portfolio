import React, { useState } from 'react'

import Logo from "./Logo"
import Navicon from './NavIcon';
import Navlinks from './NavLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className="navigation">
      <Logo />
      <Navicon toggle={toggle} isOpen={isOpen}/>
      <Navlinks isOpen={isOpen}/>
    </nav>
  )
}

export default Navbar
