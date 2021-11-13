import React from 'react'
import style from './Header.module.scss'
import Logo from './../../images/logoMain.png'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div className={style.header}>
      <img src={Logo} alt='Logo company TrafficIsobar' />
      <NavBar />
    </div>
  )
}

export default Header
