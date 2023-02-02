import React from 'react'
import PropTypes from 'prop-types'
import './Title.scss'

const Title = ({ title, subtitle, showContent, className }) => {
  return (
    <>
      {title && (
        <div className={`row mt-4 ${className}`}>
          <div className='col text-uppercase secondaryColor'>
            <h5 onClick={() => showContent()}> {title}</h5>
          </div>
        </div>
      )}
      {subtitle && (
        <div className='row my-4'>
          <div className='col'>
            <h2 className='fs-1'>{subtitle}</h2>
          </div>
        </div>
      )}
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Title
