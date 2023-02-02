import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DiscoverLink from '../../../components/DiscoverLink/DiscoverLink'
import Loader from '../../../components/Loader'
import ProductCard from '../../../components/ProductCard'
import { getRandomRange } from '../../../hooks/randomRange'
import Title from '../../../components/Title'
import './index.scss'

const Sales = () => {
  const products = useSelector(state => state.products)
  const [productsCount, setProductCount] = useState(0)
  const [randomRange, setRandomRange] = useState(0)

  useEffect(() => {
    setProductCount(products.products.length)
    setRandomRange(getRandomRange(0, productsCount, 5))
  }, [products.products, productsCount])

  return (
    <div className='container'>
      <Title title='Sales and promotions' subtitle='Catch the best price' />
      {products.products ? (
        products.status === 'loading' ? (
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
                  subClass={'sales-item'}
                  key={item._id}
                  id={item._id}
                  nameCard={item.name}
                  color={item.color}
                  size={item.size}
                />
              ))}
            <DiscoverLink subClass={'sales-link '} />
          </section>
        )
      ) : null}
    </div>
  )
}
export default Sales
