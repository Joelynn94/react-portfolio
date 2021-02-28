import React from 'react'

const NavIcon = ({ isOpen, toggle}) => {
  return (
    <div className="nav-icon" onClick={() => toggle(!isOpen)}>
      <i className={isOpen ? "far fa-times" : "far fa-bars"}></i>
    </div>
  )
}

export default NavIcon
