import React from 'react'
import MenuItems from '../../MenuItems/MenuItems'

function MenuItem() {
  return (
    <>
      {MenuItems.map((menuItem, index) => {
        const { title, to } = menuItem
        return (
          <li className='navbar-item' key={index}>
            <Link className='navbar-link' to={to}>
              {title}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default MenuItem
