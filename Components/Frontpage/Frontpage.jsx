import React from 'react'
import styles from './frontpage.module.scss'

const Frontpage = ({content}) => {

  const {intro, punchline} = content.data.attributes;

  return (
   <>
  
    <div className={styles.title_grid}> 

        <div className={styles.sudo_one}>
           <p className={styles.intro}> {intro}</p>
            <div className={styles.short_vertical_line}> </div>
          <h1 className={styles.punchline}>{punchline}</h1>
            <div className={styles.long_vertical_line}> </div>
        </div>

        <div className={styles.sudo_two}>
            <div className={styles.sphere}> </div>
        </div>
    </div>
    
    </>
  )
}

export default Frontpage
