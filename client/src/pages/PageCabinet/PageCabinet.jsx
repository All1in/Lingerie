import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChangePassword from '../../components/Forms/ChangePassword'
import PersonalInfo from '../../components/Forms/PersonalInfo/PersonalInfo'
import Title from '../../components/Title'
import { fetchDeleteOrder, getOrdersUser } from '../../store/order/order'
import styles from './PageCabinet.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
import BreadCrumbs from '../../components/BreadCrumbs'
import Modal from '../../components/Modal'
import Button from '../../components/Button'

const PageCabinet = () => {
  const userInfo = useSelector(state => state.user.info)
  const { order } = useSelector(state => state.order)
  const [info, setInfo] = useState(true)
  const [orderVis, setOrderVis] = useState(false)
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrdersUser())
  }, [dispatch])

  const visible = value => {
    if (!value) {
      setInfo(!info)
      setOrderVis(!orderVis)
    }
  }

  const visibleMenu = () => {
    setModal(!modal)
  }

  const deleteOrder = id => {
    dispatch(fetchDeleteOrder(id))
  }

  return (
    <div className='container py-5 page'>
      <BreadCrumbs startFrom='Home' />
      <div className={styles.block}>
        <div className={styles.menu}>
          <p
            onClick={() => visible(info)}
            className={`${info ? styles.active : null}`}
          >
            Personal info
          </p>
          <p
            onClick={() => visible(orderVis)}
            className={`${orderVis ? styles.active : null}`}
          >
            My orders
          </p>
        </div>
        <div className={styles.info}>
          {info && (
            <>
              <Title subtitle={`Hello, ${userInfo.firstName}!`} />
              <PersonalInfo />
              <ChangePassword />
            </>
          )}
          {orderVis && (
            <>
              <Title
                subtitle={order.length !== 0 ? 'My orders' : 'No orders'}
              />
              {order.length !== 0 &&
                order.map(item => (
                  <div key={item._id}>
                    <Title title={`${'№ ' + item._id}`} />
                    <div className={styles.container}>
                      <div className={styles.information}></div>
                      <div className={styles.container_cards}>
                        <div className={styles.cards}>
                          {item.products.map(prod => (
                            <ProductCard
                              key={prod._id}
                              photoUrl={prod.product.imageUrls[0]}
                              nameCard={prod.product.name}
                              size={prod.product.size}
                              ident={prod.product.itemNo}
                              subClass={' img-fluid overflow-auto flex-grow-1'}
                              color={prod.product.color}
                              quantity={prod.cartQuantity}
                              vievForOrders
                            />
                          ))}
                        </div>

                        <div className={styles.container_cards_info}>
                          <div className={styles.container_cards_info_block}>
                            <div>
                              <span>{item.date}</span>
                            </div>
                            <div>
                              <span className='title'>totalsum:</span>
                              <span>{item.totalSum}$</span>
                            </div>
                            <div>
                              <span className='title'>status:</span>
                              <span>{item.status}</span>
                            </div>
                            <div>
                              <span className='title'>mail:</span>
                              <span>{item.email} </span>
                            </div>
                            <div>
                              <span className='title'>mobile:</span>
                              <span>{item.mobile} </span>
                            </div>
                          </div>
                          <div className={styles.container_cards_info_block}>
                            <p
                              onClick={visibleMenu}
                              style={{ cursor: 'pointer' }}
                            >
                              DELETE ORDER
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {modal && (
                      <Modal
                        close={visibleMenu}
                        text='Are you sure you want to delete the order?'
                        actions={[
                          <Button
                            text='Yes'
                            onClick={() => deleteOrder(item._id)}
                            className={styles.btn}
                          />,
                          <Button
                            text='No'
                            onClick={visibleMenu}
                            className={styles.btn}
                          />
                        ]}
                      />
                    )}
                  </div>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PageCabinet
