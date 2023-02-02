import React from 'react'
import { ReactComponent as Delete } from '../svg/delete.svg'
import { ReactComponent as Add } from '../svg/add.svg'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const BlockForCart = ({ clickDelete, clickAdd, quantity }) => {
  const { location } = useSelector(state => state.location)

  return (
    <div className='quantity'>
      {location === '/cart' ? <Delete onClick={clickDelete} /> : null}
      <span style={{ padding: '0 10px' }}>{quantity}</span>
      {location === '/cart' ? <Add onClick={clickAdd} /> : null}
    </div>
  )
}

BlockForCart.propTypes = {
  clickDelete: PropTypes.func,
  clickAdd: PropTypes.func,
  quantity: PropTypes.number
}

export default BlockForCart
