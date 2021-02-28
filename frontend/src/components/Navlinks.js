import React from 'react'
import { Link } from "react-router-dom"

const NavLinks = () => {
  return (
    <ul className="navigation-ul">    
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/blog">Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Contact</Link>
      </li>
    </ul>
  )
}

export default NavLinks
