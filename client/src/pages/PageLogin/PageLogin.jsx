import React from 'react'
import Login from '../../components/Forms/Login'
import Title from '../../components/Title'
import styles from './PageLogin.module.scss'

const PageLogin = () => {
  return (
    <div className={styles.page}>
      <div className={styles.create}>
        <Title subtitle='Edit personal information' />
        <Login />
      </div>
    </div>
  )
}

export default PageLogin
