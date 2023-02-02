import React from 'react'
import Button from '../../components/Button'
import './index.scss'

function Page404() {
  return (
    <div className='container'>
      <div className='page__wrapper'>
        <div className='page__content'>
          <h1 className='page__title'>404</h1>
          <p className='page__text'>Sorry, page was not found.</p>
          <p className='page__text'>
            Choose something else from our catalog{' '}
            <span className='page__text_heart'>&#10084;</span>
          </p>
          <Button
            to='/'
            text='Go to Homepage'
            className='page__button content-button'
          />
        </div>
        <div className='page__img'>
          <img src='https://kept.com.ua/image/20D9/ard9662.jpeg' alt='girl' />
        </div>
        <div className='page__img last'>
          <img src='https://kept.com.ua/image/20Da/dotuk-69.jpg' alt='girl' />
        </div>
      </div>
    </div>
  )
}

export default Page404
