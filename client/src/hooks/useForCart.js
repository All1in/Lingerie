import React from 'react'
import { useSelector } from 'react-redux'

export const useForCart = () => {
  const products = useSelector(state => state.products)
  const cardInCart = useSelector(state => state.cart.cart)
  const token = useSelector(state => state.auth.token)

  const totalPrice = () => {
    const totalPrice = 0

    if (token) {
      if (cardInCart.products) {
        const prices = cardInCart.products.map(item => {
          return item.product.currentPrice * item.cartQuantity
        })
        const calculatePrice = prices.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          totalPrice
        )
        return calculatePrice
      }
    } else {
      const itemsinCart = JSON.parse(localStorage.getItem('cart'))
      const array = []

      if (itemsinCart) {
        products.products.forEach(item => {
          itemsinCart.forEach(el => {
            return item._id === el ? array.push(item) : null
          })
        })
      }
      const prices = array.map(product => {
        return product.currentPrice
      })
      const calculateTotalPrice = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        totalPrice
      )
      return calculateTotalPrice
    }
  }

  const findItemsInCart = () => {
    const itemsinCart = JSON.parse(localStorage.getItem('cart'))
    if (itemsinCart) {
      return products.products.filter(item => itemsinCart.includes(item._id))
    }
  }

  const localQuantity = value => {
    const itemsinCart = JSON.parse(localStorage.getItem('cart'))
    let counter = 0

    for (let elem of itemsinCart) {
      if (elem == value) {
        counter++
      }
    }
    return counter
  }

  return { totalPrice, findItemsInCart, localQuantity }
}
