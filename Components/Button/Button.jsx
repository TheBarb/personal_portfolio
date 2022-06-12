import React from 'react'
import styles from './button.module.scss'

const Button = ({buttonContent}) => {

  return (
    <button className={styles.knöpfchen}>
    {buttonContent}
    </button>
  )
}

export default Button
