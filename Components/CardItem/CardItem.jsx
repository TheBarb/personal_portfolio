import React from 'react'
import styles from './cardItem.module.scss'
import Link from 'next/link'
import Button from '../Button/Button'

const CardItem = ({card}) => {
  return (
    <>

   <Link href="/card/[id]" as={`/card/${card.id}`}>
   {/* <Link href="/projects/[slug]" as={`/projects/${card.attributes.Slug}`} > */}
    <a>
    <div className={styles.card}>
        <div>
          <div className={styles.title}>{card.attributes.title}</div>
          <div className={styles.teaser}>{card.attributes.teaser}</div>
        </div>
        <Button buttonContent='MEHR'/> 
    </div>
    </a>
   </Link> 

{/* <Link href="/tomdickandharry" as={`/tomdickandharry`} >
    <a>
    <div className={styles.card}>
        <div>
          <div className={styles.title}>{card.attributes.title}</div>
          <div className={styles.teaser}>{card.attributes.teaser}</div>
        </div>
        <Button/> 
    </div>
    </a>
   </Link>  */}
 
</>
  )
}

export default CardItem
