import React from 'react'
import styles from './logo.module.scss'
import Image from 'next/image'

const Logo = () => {
  return (
    <>
    <div className={styles.logo}>
     The <Image src="/LeaB1.png" alt="me" width="45" height="55" />arb.
    </div>
    </>
  )
}

export default Logo
