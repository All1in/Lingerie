import React, { useEffect, useRef } from 'react'
import ProductCard from '../ProductCard'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchFilterProducts,
  setFilters,
  setInitialState
} from '../../store/filter/filterSlice'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { sortOptions } from '../SortList/SortList'

const Galery = () => {
  const {
    products,
    startPage,
    perPage,
    color,
    categories,
    size,
    minPrice,
    maxPrice
  } = useSelector(state => state.filter)
  const sort = useSelector(state => state.filter.sort.sortProperty)

  const isSearch = useRef(false)
  const isAssembled = useRef(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const categoryFilter = categories.length ? `&categories=${categories}` : ''
  const colorFilter = color.length ? `&color=${color}` : ''
  const sizeFilter = size.length ? `&size=${size}` : ''
  const sortFilter = sort ? `&sort=${sort}` : ''

  useEffect(() => {
    return () => {
      dispatch(setInitialState())
    }
  }, [dispatch])

  useEffect(() => {
    if (window.location.search) {
      const filterParams = qs.parse(window.location.search.substring(1))
      const sort = sortOptions.find(
        obj => obj.sortProperty === filterParams.sort
      )

      dispatch(setFilters({ ...filterParams, sort }))
    }
    isSearch.current = true
  }, [dispatch])

  useEffect(() => {
    if (isAssembled.current) {
      const queryString = qs.stringify({
        startPage,
        perPage,
        categories,
        color,
        size,
        sort,
        minPrice,
        maxPrice
      })

      navigate(`?${queryString}`)
    }
    isAssembled.current = true
  }, [
    categories,
    color,
    maxPrice,
    minPrice,
    navigate,
    perPage,
    size,
    sort,
    startPage
  ])

  useEffect(() => {
    if (isSearch.current) {
      dispatch(
        fetchFilterProducts({
          categoryFilter,
          colorFilter,
          sizeFilter,
          startPage,
          perPage,
          sortFilter,
          minPrice,
          maxPrice
        })
      )
    }
  }, [
    dispatch,
    startPage,
    perPage,
    categoryFilter,
    colorFilter,
    sizeFilter,
    sortFilter,
    minPrice,
    maxPrice
  ])

  return (
    <ul className='content-list'>
      {products.products ? (
        <>
          {products.products.map(item => (
            <li key={item._id}>
              <ProductCard
                ident={item.itemNo}
                price={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                key={item._id}
                id={item._id}
                nameCard={item.name}
                color={item.color}
                size={item.size}
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  )
}

export default Galery
