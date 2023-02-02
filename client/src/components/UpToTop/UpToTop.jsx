import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from './UpToTop.module.scss'
import { ReactComponent as Up } from './svg/up.svg'

const UpToTop = () => {
  const [windowHeight, setWindowHeight] = useState()
  const [scroll, setScroll] = useState()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setScroll(window.scrollY)
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return scroll > windowHeight ? (
    <div className={styles.up} onClick={toTop}>
      <Up className={styles.svg} />
    </div>
  ) : null
}

export default UpToTop
