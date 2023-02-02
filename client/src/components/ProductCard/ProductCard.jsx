import React from 'react'
import AddCartFavorit from './AddCartFavorit'
import { useFunctionality } from '../../hooks/useFunctionality'
import './ProductCard.scss'
import BlockForCart from './BlocForCart/BlocForCart'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCard = ({
  price,
  photoUrl,
  subClass,
  id,
  nameCard,
  viewForCart,
  vievForOrders,
  quantity,
  color,
  ident,
  size,
  cart
}) => {
  const { clickDeleteCardInCart, clickAddInCart, clickDeleteProductInCart } =
    useFunctionality(id)
  const navigate = useNavigate()

  const redirectToCardPage = () => {
    navigate(`/products/${ident}`)
  }

  const cardForCart = (
    <div
      className='card'
      onClick={cart ? null : redirectToCardPage}
      style={cart ? { cursor: 'auto' } : { cursor: 'pointer' }}
    >
      <div className='card_img'>
        <img src={photoUrl} alt={nameCard} className='set-img' />
      </div>
      <div className='card_info'>
        <h3
          onClick={cart ? redirectToCardPage : null}
          style={cart ? { cursor: 'pointer' } : null}
          className='title_hover'
        >
          {nameCard}
        </h3>
        <div>
          <span className='title'>Size</span>
          <span>{size}</span>
        </div>
        <div>
          <span className='title'>Color</span>
          <div className={`color-square ${color}`}></div>
        </div>
        {cart && (
          <div>
            <span className='title'>Quantity</span>
            <BlockForCart
              clickDelete={() => clickDeleteCardInCart(id)}
              clickAdd={() => clickAddInCart(id)}
              quantity={quantity}
            />
          </div>
        )}
      </div>
      <div className='card_price'>
        <p>{price} &euro;</p>
        {cart && (
          <span onClick={() => clickDeleteProductInCart(id)}>Remove</span>
        )}
      </div>
    </div>
  )

  const cardForPages = (
    <div className={`set-card ${subClass}`} onClick={redirectToCardPage}>
      <div className='image-wrapper'>
        <img src={photoUrl} alt='girl' className='set-img' />
      </div>
      <div className='text-wrapper'>
        <h3 className='set-title'>{nameCard}</h3>
        <p className='set-price'>{price} &euro;</p>
      </div>
      <div className='info-wrapper'>
        <div className={`color-square ${color}`}></div>
        <span>Size: {size}</span>
      </div>
      <AddCartFavorit cardId={id} />
    </div>
  )
  const cardForOrders = (
    <div className='card' onClick={!cart ? redirectToCardPage : null}>
      <div className='card_img'>
        <img src={photoUrl} alt={nameCard} className='set-img' />
      </div>
      <div className='card_info'>
        <h3>{nameCard}</h3>
        <div>
          <span className='title'>Price</span>
          <span>{price} $</span>
        </div>
        <div>
          <span className='title'>Size</span>
          <span>{size}</span>
        </div>
        <div>
          <span className='title'>Color</span>
          <span className={`color-square ${color}`}></span>
        </div>
        <div>
          <span className='title'>Quantity</span>
          <span>{quantity}</span>
        </div>
      </div>
    </div>
  )

  return viewForCart
    ? cardForCart
    : vievForOrders
    ? cardForOrders
    : cardForPages
}

ProductCard.defaultProps = {
  price: 15,
  nameCard: 'alt',
  color: 'yellow'
}

ProductCard.propTypes = {
  price: PropTypes.number,
  photoUrl: PropTypes.string,
  subClass: PropTypes.string,
  id: PropTypes.string,
  nameCard: PropTypes.string,
  viewForCart: PropTypes.bool,
  quantity: PropTypes.number,
  color: PropTypes.string,
  ident: PropTypes.string,
  size: PropTypes.string,
  cart: PropTypes.bool
}

export default ProductCard
