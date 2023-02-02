import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({
  id,
  label,
  colorSquare,
  classForSquare,
  onChangeCheckbox,
  isActive
}) => {
  return (
    <>
      <div className='form-check' onChange={onChangeCheckbox}>
        <input
          className='form-check-input'
          type='checkbox'
          value={label}
          id={id}
          defaultChecked={isActive}
        />
        <label className='form-check-label' htmlFor={id}>
          {colorSquare && (
            <div className={'color-square ' + classForSquare}></div>
          )}
          {label}
        </label>
      </div>
    </>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  colorSquare: PropTypes.bool,
  id: PropTypes.string,
  classForSquare: PropTypes.string,
  onChangeCheckbox: PropTypes.func
}

export default Checkbox
