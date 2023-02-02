import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../Loader'
import ProductCard from '../ProductCard'
import Title from '../Title'
import { getRandomRange } from '../../hooks/randomRange'

const AlsoLike = () => {
  const products = useSelector(state => state.products)
  const [productsCount, setProductCount] = useState(0)
  const [randomRange, setRandomRange] = useState(0)

  useEffect(() => {
    setProductCount(products.products.length)
    setRandomRange(getRandomRange(0, productsCount, 5))
  }, [products.products, productsCount])

  return products.products && products.status === 'rejected' ? null : (
    <>
      <Title subtitle='You may also like' />
      {products.status === 'loading' ? (
        <Loader />
      ) : (
        <section className='sales'>
          {products.products
            .slice(randomRange.start, randomRange.end)
            .map(item => (
              <ProductCard
                ident={item.itemNo}
                price={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                key={item._id}
                subClass='sales-item'
                id={item._id}
                nameCard={item.name}
                color={item.color}
                size={item.size}
              />
            ))}
        </section>
      )}
    </>
  )
}

export default AlsoLike
