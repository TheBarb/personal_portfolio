import React from 'react'
import styles from './oneQuestion.module.scss'

const OneQuestion = ({text, number, headline}) => {
  return (
    <div>
         <div className={styles.questionWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.number}>{number}</h3>
            <h3>{headline}</h3>
          </div>
          <div>{text}</div>
        </div>
      
    </div>
  )
}

export default OneQuestion
