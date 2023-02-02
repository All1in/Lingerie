import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <NavLink to='/catalog/filter'>New lingerie</NavLink>
      <NavLink to='/catalog/filter'>Sales</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/catalog/filter'>Catalogue</NavLink>
      <NavLink to='/catalog/filter'>Contact</NavLink>
    </div>
  )
}

export default Menu
