import React from 'react'
import './../../styles/index.scss'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/' exact="true">Главная</NavLink>
      <NavLink to='/example'>Пример</NavLink>
    </nav>
  )
}

export default NavBar
