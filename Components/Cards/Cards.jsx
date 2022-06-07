import React from 'react'
import styles from './cards.module.scss'
import Button from '../Button/Button'
import CardItem from '../CardItem/CardItem'

const Cards = ({cardContent}) => {

  const cards = cardContent.data;
  // console.log(cards)

  return (
  
  <div className={styles.cardWrapper}>
   {cards.map((card, index) => {
     return(
   /*  <div key= {index} className={styles.card}>
        <div>
          <div className={styles.title}>{card.attributes.title}</div>
          <div className={styles.teaser}>{card.attributes.teaser}</div>
        </div>
        <Button/> 
    </div> */
     <CardItem key={index} card={card}/>
     )
   })}

  </div>
   
  )
}

export default Cards
