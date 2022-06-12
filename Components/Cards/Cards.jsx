import React from 'react'
import styles from './cards.module.scss'
import CardItem from '../CardItem/CardItem'

const Cards = ({cardContent}) => {

  const cards = cardContent.data;
  // console.log(cards)

  return (

  <div className={styles.cardWrapper}>
   {cards.map((card, index) => {
     return(
     <CardItem key={index} card={card}/>
     )
   })}
  </div>
 
   
  )
}

export default Cards
