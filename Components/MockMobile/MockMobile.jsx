import React from 'react'

export const MockMobile = ({url}) => {
  return (
    <>
    <div className={styles.flexWrapper}>
    <div className={styles.drawingBrowser}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
    </div>
    <div className={styles.drawingDesktop}>
  <div className={styles.iframeWrapper}>
   <iframe className={styles.contentDesktop} src={url} frameBorder="0"></iframe> 

  </div>
  </div>
  </div>
  </>
  )
}
