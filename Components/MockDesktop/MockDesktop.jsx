import styles from './mockDesktop.module.scss'

import React from 'react'

const MockDesktop = ({url}) => {

  return url ? (
    <>
    <div className={styles.flexWrapper}>
     <div className={styles.drawingBrowser}>
         <div className={styles.circle}></div>
         <div className={styles.circle}></div>
         <div className={styles.circle}></div>
     </div>
     <div className={styles.drawingDesktop}>
 
    <iframe className={styles.contentDesktop} src={url} frameBorder="0"></iframe> 
 
   </div>
   </div> 
   </>
  ) : (
   <div></div>
  );
}

export default MockDesktop
