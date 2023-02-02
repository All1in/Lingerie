import React from 'react'
import Loader from '../../../components/Loader'
import Title from '../../../components/Title'
import ButtonCheckout from '../ButtonCheckout/ButtonCheckout'
import styles from '../PageCart.module.scss'
import { ContainerCart } from '../ContainerCart/ContainerCart'
import { useSelector } from 'react-redux'

const SectionOrder = ({ items, totalPrice, check }) => {
  const cardInCart = useSelector(state => state.cart)
  const token = useSelector(state => state.auth.token)

  const { location } = useSelector(state => state.location)

  return (
    <section
      className={
        location !== '/checkout' ? styles.section : styles.section + ' checkout'
      }
    >
      <div
        className={
          location !== '/checkout'
            ? styles.section_products
            : styles.section_products + ' checkout'
        }
      >
        {token ? (
          cardInCart.status === 'loading' ? (
            <Loader />
          ) : (
            <ContainerCart items={items} />
          )
        ) : (
          <ContainerCart items={items} />
        )}
      </div>
      {check ? (
        <div
          className={
            location !== '/checkout'
              ? styles.section_totaly
              : styles.section_totaly + ' checkout'
          }
        >
          <div className={styles.section_totaly_content}>
            <Title subtitle='Total' />
            <div className={styles.section_totaly_content_price}>
              <p>Total price</p>
              <p>{totalPrice} €</p>
            </div>
            <ButtonCheckout />
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default SectionOrder
