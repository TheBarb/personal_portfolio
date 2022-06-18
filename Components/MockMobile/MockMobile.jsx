import React from 'react'
import styles from './mockMobile.module.scss'

const MockMobile = ({url}) => {


  return (
    <>
  <div className={styles.flexWrapper}>
      <div className={styles.drawingMobileTop}>
        <div className={styles.circle}></div>
        <div className={styles.microphone}></div>
      </div>
      <div className={styles.drawingPhone}>
        <div className={styles.iframeWrapper}>
        <iframe className={styles.contentMobile} scrolling={'auto'} src={url} frameBorder="0"></iframe> 
        </div>
      </div>
      <div className={styles.drawingMobileBottom}></div>
  </div> 
  </>
  )
}

export default MockMobile;