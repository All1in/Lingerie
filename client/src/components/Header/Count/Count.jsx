import React from 'react'
import styles from './Count.module.scss'
import PropTypes from 'prop-types'

const Count = ({ count }) => {
  return <span className={styles.count}>{count}</span>
}

Count.propTypes = {
  onClick: PropTypes.number
}

export default Count
