import styles from './desktop.module.scss'

import React from 'react'

const Desktop = () => {
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
     {/* <iframe className={styles.contentDesktop} src="https://www.leagk.com" frameBorder="0"></iframe>  */}
     <iframe className={styles.contentDesktop} src="https://www.tomdickandharry.de" frameBorder="0"></iframe> 
      {/* <iframe className={styles.contentDesktop} src="http://www.nelepachnicke.de" frameBorder="0"></iframe>  */}

    </div>
    </div>
    </div>
    </>
  )
}

export default Desktop
