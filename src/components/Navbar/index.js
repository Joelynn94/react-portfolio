import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuItems from '../../MenuItems/MenuItems'
import './styles.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const showMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className='navbar'>
      <div className='navbar-inner'>
        <div className='navbar-logo'>
          <Link className='navbar-brand' to='/'>
            Joseph Lynn
          </Link>
        </div>
        <button className='navbar-toggle' onClick={showMenu}>
          <i className={isMenuOpen ? 'fal fa-times' : 'fal fa-bars'}></i>
        </button>
        <nav className={isMenuOpen ? 'navbar-menu open' : 'navbar-menu'}>
          <ul className='navbar-ul'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index} className={item.itemClass}>
                  <Link className={item.linkClass} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
