import React from 'react'
import Favicon from './Favicon/Favicon'
import './AddCartFavorit.scss'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'
import { useFunctionality } from '../../../hooks/useFunctionality'

const AddCartFavorit = ({ subClasss, cardId }) => {
  const { inFav, inCart, actionOnCkickFavOrCart } = useFunctionality(cardId)

  const addItemToCart = event => {
    event.stopPropagation()
    actionOnCkickFavOrCart(cardId, 'cart')
  }

  const addItemToWishlist = event => {
    event.stopPropagation()
    actionOnCkickFavOrCart(cardId, 'fav')
  }

  return (
    <div className={'set-hover ' + subClasss}>
      <Button
        onClick={addItemToCart}
        className='set-addcart'
        text={!inCart ? 'Add to cart' : 'Delete from cart'}
      />
      <div className='set-addfavorit'>
        <Favicon onClick={addItemToWishlist} inFav={inFav} />
      </div>
    </div>
  )
}

AddCartFavorit.propTypes = {
  cardId: PropTypes.string,
  subClasss: PropTypes.string
}

export default AddCartFavorit
