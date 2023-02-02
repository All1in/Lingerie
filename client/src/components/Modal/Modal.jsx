import React from 'react'
import styles from './Modal.module.scss'
import { ReactComponent as Close } from './close.svg'
import PropTypes from 'prop-types'

const Modal = ({ text, close, actions }) => {
  return (
    <>
      <div className={styles.bg} onClick={close} />
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <div className={styles.modal_close} onClick={close}>
            <Close />
          </div>
        </div>
        <div className={styles.modal_body}>
          <p>{text}</p>
          <div className={styles.modal_footer}>{actions}</div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  text: PropTypes.string,
  close: PropTypes.func,
  actions: PropTypes.array
}
Modal.defaultProps = {
  text: '',
  close: () => {},
  actions: []
}
export default Modal
