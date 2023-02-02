import React from 'react'
import { Link } from 'react-router-dom'
import './DiscoverLink.scss'
import PropTypes from 'prop-types'

const DiscoverLink = ({ subClass }) => {
  return (
    <div className={`${subClass} set-item4`}>
      <Link to='/catalog/filter' className='collection'>
        Discover
      </Link>
    </div>
  )
}

DiscoverLink.propTypes = {
  subClass: PropTypes.string.isRequired
}

export default DiscoverLink
