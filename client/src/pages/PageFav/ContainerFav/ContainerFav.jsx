import React from 'react'
import ProductCard from '../../../components/ProductCard'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import './ContainerFav.scss'

const ContainerFav = ({ items }) => {
  const token = useSelector(state => state.auth.token)

  return (
    <div className='favorit-wrapper'>
      {(token
        ? items.products.products && items.products.products
        : items && items
      ).map(product => (
        <ProductCard
          item={product}
          ident={product.itemNo}
          price={product.currentPrice}
          photoUrl={product.imageUrls[1]}
          subClass={' img-fluid overflow-auto flex-grow-1'}
          key={product._id}
          id={product._id}
          nameCard={product.name}
          size={product.size}
          color={product.color}
        />
      ))}
    </div>
  )
}

ContainerFav.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ])
}

export default ContainerFav
