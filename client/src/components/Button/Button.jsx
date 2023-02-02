import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ text, onClick, className, type, to, href }) => {
  let Component

  if (href) {
    Component = 'a'
  } else if (to) {
    Component = NavLink
  } else {
    Component = 'button'
  }

  return (
    <Component
      className={'btn ' + className}
      href={href}
      to={to}
      onClick={onClick}
      type={href || to ? undefined : type}
    >
      {text}
    </Component>
  )
}

Button.defaultProps = {
  text: 'text'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

export default Button
