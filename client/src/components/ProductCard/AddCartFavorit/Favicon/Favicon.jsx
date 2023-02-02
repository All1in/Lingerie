import React from 'react'
import { ReactComponent as Favorit } from './svg/favorit.svg'
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg'
import PropTypes from 'prop-types'
import styles from './Favicon.module.scss'

const Favicon = ({ inFav, onClick }) => {
  return (
    <>
      {inFav ? (
        <FavoritCheck className={styles.img} onClick={onClick} />
      ) : (
        <Favorit className={styles.img} onClick={onClick} />
      )}
    </>
  )
}

Favicon.propTypes = {
  inFav: PropTypes.bool,
  onClick: PropTypes.func
}

export default Favicon
