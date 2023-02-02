import React from 'react'
import styles from './LoggedBlock.module.scss'
import Button from '../Button'
import Title from '../Title'

const LoggedBlock = ({ checkout }) => {
  return (
    <div className='container'>
      <div className={styles.logged}>
        <Title
          subtitle={
            checkout ? 'Sign in to place an order' : 'You are already logged in'
          }
        />
        <Button
          to={checkout ? '/signin' : '/'}
          text={checkout ? 'Sign in' : 'Go to Homepage'}
          className='page__button content-button'
        />
      </div>
    </div>
  )
}

export default LoggedBlock
