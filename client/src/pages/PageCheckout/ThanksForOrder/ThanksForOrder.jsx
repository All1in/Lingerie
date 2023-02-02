import React from 'react'
import Button from '../../../components/Button/Button'
import styles from './ThanksForOrder.module.scss'
import Title from '../../../components/Title'

const ThanksForOrder = () => {
  return (
    <div className={'container ' + styles.block}>
      <div className={styles.block_img}>
        <img src='https://i.ibb.co/y639BtB/ard9662.jpg' alt='girl' />
      </div>
      <div className={styles.block_img}>
        <img src='https://i.ibb.co/fQmhBH4/ard65.jpg' alt='girl' />
      </div>
      <div className={styles.block_text}>
        <Title subtitle='Thanks for the order' />
        <Button text='Continue shopping' to='/catalog/filter' />
      </div>
    </div>
  )
}

export default ThanksForOrder
