import React from 'react'
import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <>
    <div className={styles.flexFooter}>
    <div className={styles.nav_link}><span>© </span>BARBARA SCHULZE 2022</div>
    <li className={styles.nav_link} >
   <Link href="https://github.com/TheBarb">GITHUB</Link>
    </li>
    <li className={styles.nav_link} >
   <Link href="https://www.linkedin.com/in/barbara-schulze/">LINKEDIN</Link>
    </li>
    <li className={styles.nav_link} >
   <Link href="mailto:mail@barbaraschulze.de">MAIL@BARBARASCHULZE.DE</Link>
    </li>
    </div>
    </>
  )
}

export default Footer
