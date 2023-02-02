import React from 'react'
import PropTypes from 'prop-types'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'

import './MinMaxFilter.scss'

const MinMaxFilter = ({
  minPrice,
  maxPrice,
  onChange,
  onChangeInputMin,
  onChangeInputMax
}) => {
  console.log(minPrice)
  return (
    <div className='price-wrapper'>
      <div className='price-input'>
        <span className='price-input_text'>from</span>
        <input
          type='text'
          className='price-input_min price-input_width'
          value={minPrice}
          onChange={onChangeInputMin}
        />
        <span className='price-input_text'>to</span>
        <input
          type='text'
          className='price-input_min price-input_width'
          value={maxPrice}
          onChange={onChangeInputMax}
        />
        <span className='price-input_text'>EUR</span>
      </div>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        defaultValue={[minPrice, maxPrice]}
        value={[minPrice, maxPrice]}
        onInput={onChange}
      />
    </div>
  )
}

MinMaxFilter.propTypes = {
  minPrice: PropTypes.string,
  maxPrice: PropTypes.string,
  onChange: PropTypes.func,
  onChangeInputMin: PropTypes.func,
  onChangeInputMax: PropTypes.func
}

export default MinMaxFilter
