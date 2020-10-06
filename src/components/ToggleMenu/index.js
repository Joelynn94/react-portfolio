import React from 'react'
import './styles.css'

function ToggleMenu({ openMenu }) {
  return (
    <>
      <button className='navbar-toggle' onClick={() => openMenu}>
        <span className='btn-line'></span>
        <span className='btn-line'></span>
        <span className='btn-line'></span>
      </button>
    </>
  )
}

export default ToggleMenu
