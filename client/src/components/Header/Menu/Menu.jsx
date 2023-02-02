import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Close } from './svg/close.svg'
import PropTypes from 'prop-types'
import styles from './Menu.module.scss'

const Menu = ({ closeFunc }) => {
  const arr = [
    { option: 'New lingerie', link: '/catalog/filter' },
    { option: 'Sales', link: '/catalog/filter' },
    { option: 'Profile', link: '/profile' },
    { option: 'Catalogue', link: '/catalog/filter' },
    { option: 'Contact', link: '/catalog/filter' }
  ]

  return (
    <>
      <div className={styles.menu__back}></div>
      <div className={styles.menu__body}>
        <div className={styles.menu__body_close}>
          <Close onClick={closeFunc} />
        </div>
        <div className={styles.menu__body_list}>
          <div>
            {arr.map(value => {
              const { option, link } = value
              return <NavLink to={link}> {option} </NavLink>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

Menu.propTypes = {
  closeFunc: PropTypes.func.isRequired
}

export default Menu
