import React from 'react'
import styles from './button.module.scss'

const Button = () => {

    const buttonContent = "MEHR"
  return (
    <button className={styles.knöpfchen}>
       {buttonContent}
    </button>
  )
}

export default Button
