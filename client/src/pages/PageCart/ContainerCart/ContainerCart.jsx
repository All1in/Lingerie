import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../../components/ProductCard'
import PropTypes from 'prop-types'
import { useForCart } from '../../../hooks/useForCart'

export const ContainerCart = ({ items }) => {
  const token = useSelector(state => state.auth.token)
  const { localQuantity } = useForCart()

  return (
    <div>
      {(token ? items.products && items.products : items && items).map(
        product => (
          <ProductCard
            price={(token ? product.product : product).currentPrice}
            photoUrl={(token ? product.product : product).imageUrls[0]}
            subClass={''}
            key={(token ? product.product : product)._id}
            id={(token ? product.product : product)._id}
            nameCard={(token ? product.product : product).name}
            quantity={token ? product.cartQuantity : localQuantity(product._id)}
            color={(token ? product.product : product).color}
            size={(token ? product.product : product).size}
            ident={(token ? product.product : product).itemNo}
            viewForCart
            cart
          />
        )
      )}
    </div>
  )
}

ContainerCart.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
}
