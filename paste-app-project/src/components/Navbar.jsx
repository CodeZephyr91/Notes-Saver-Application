import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='container'>
      <NavLink className='linkshome'to='/'>
        Home
      </NavLink>
      <NavLink className='linkshome' to='/pastes'>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
