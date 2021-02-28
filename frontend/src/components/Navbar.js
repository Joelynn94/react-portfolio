import React from 'react'
import Logo from "./Logo"
import Navicon from './Navicon';
import Navlinks from './Navlinks';

const Navbar = () => {
  return (
    <nav className="navigation">
      <Logo />
      <Navicon />
      <Navlinks />
    </nav>
  )
}

export default Navbar
