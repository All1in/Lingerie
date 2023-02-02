import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Burger.module.scss'
import PropTypes from 'prop-types'

const Burger = ({ onClick }) => {
  const { location } = useSelector(state => state.location)

  return (
    <div className={location !== '/' ? styles.burger_page : styles.burger}>
      <div className={styles.burger_btn} onClick={onClick}>
        <div className={styles.burger_btn_line} />
        <div className={styles.burger_btn_line} />
      </div>
    </div>
  )
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Burger
