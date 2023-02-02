import React from 'react'
import { useSelector } from 'react-redux'
import Title from '../../components/Title/Title'
import { useForCart } from '../../hooks/useForCart'
import SectionOrder from './SectionOrder'
import './Other.scss'
import AlsoLike from '../../components/AlsoLike'
import BreadCrumbs from '../../components/BreadCrumbs'

const PageCart = () => {
  const cardInCart = useSelector(state => state.cart.cart)
  const cartCounter = useSelector(state => state.counter)
  const token = useSelector(state => state.auth.token)
  const { totalPrice, findItemsInCart } = useForCart()

  return (
    <div className='container py-5 page'>
      <BreadCrumbs startFrom='Home' />
      {!cartCounter.inCart ? (
        <>
          <Title subtitle='Your shopping cart is empty' />
          <AlsoLike />
        </>
      ) : (
        <>
          <Title subtitle='Your cart' />
          <SectionOrder
            items={token ? cardInCart : findItemsInCart()}
            totalPrice={totalPrice()}
            check={token ? cardInCart : cartCounter.inCart}
          />
        </>
      )}
    </div>
  )
}

export default PageCart
