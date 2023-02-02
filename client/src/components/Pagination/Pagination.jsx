import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setstartPage } from '../../store/filter/filterSlice'
import './Pagination.scss'

function filler(pagesCount) {
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return pages
}

const Pagination = () => {
  const dispatch = useDispatch()
  const { products, startPage, perPage } = useSelector(state => state.filter)
  const pagesCount = Math.ceil(products.productsQuantity / perPage)
  const [pages, setPages] = useState([])

  useEffect(() => {
    setPages(filler(pagesCount))
  }, [pagesCount])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [startPage])

  return (
    <div className='pages'>
      {pages.length &&
        pages.map((page, index) => (
          <span
            key={index}
            className={startPage === page ? 'start-page-number' : 'page-number'}
            onClick={() => dispatch(setstartPage(page))}
          >
            {page}
          </span>
        ))}
    </div>
  )
}
export default Pagination
