import React from 'react'
import Button from '../../components/Button'
import SignIn from '../../components/Forms/SignIn'
import Title from '../../components/Title'
import styles from './PageSignIn.module.scss'

const PageSignIn = () => {
  return (
    <div className={styles.page}>
      <div className={styles.block}>
        <div className={styles.block_signin}>
          <div className={styles.block_signin_content}>
            <Title subtitle='Are you a user?' />
            <SignIn />
          </div>
        </div>
        <div className={styles.block_login}>
          <div className={styles.block_login_content}>
            <Title subtitle='Is it your first visit?' />
            <ul>
              <li>10% discount for newsletter sign up</li>
              <li>User cabinet with easy way to track your order</li>
            </ul>
            <Button text='Create account' to='/login' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageSignIn
