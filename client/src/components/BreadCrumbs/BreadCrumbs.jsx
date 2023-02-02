import React from 'react'
import { Link } from 'react-router-dom'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'
import PropTypes from 'prop-types'
import styles from './BreadCrumbs.module.scss'

const NavigatePanel = ({ startFrom }) => {
  const { navigate, pathNames, reNavigate } = useBreadCrumb()
  const symbol = <span className={styles.symbol}>&#9474;</span>

  return (
    <div className={styles.block}>
      <span onClick={reNavigate} className={styles.link_f}>
        {startFrom} {symbol}
      </span>
      {pathNames.map((pathname, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
        const isLast = index === pathNames.length - 1
        pathname = pathname[0].toUpperCase() + pathname.slice(1)
        return isLast ? (
          <Link className={styles.link} key={pathname}>
            {' ' + pathname + ' '}
          </Link>
        ) : (
          <>
            <Link
              key={index}
              onClick={() => navigate(routeTo)}
              className={styles.link}
            >
              {' ' + pathname + ' '}
            </Link>
            {symbol}
          </>
        )
      })}
    </div>
  )
}

NavigatePanel.defaultProps = {
  startFrom: 'Home'
}

NavigatePanel.propTypes = {
  startFrom: PropTypes.string.isRequired
}

export default NavigatePanel
