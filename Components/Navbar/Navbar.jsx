import React, {useState} from 'react'
import Link from 'next/link'
import styles from './navbar.module.scss'
import RadioButton from '../RadioButton/RadioButton'

const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  //isModal ? console.log('hello!') : ''
  
  const activeClass = isModal
      ? `${styles["active"]}`
      : ''

  return (
   <>
  <div className={`${styles.navigation} ${activeClass}`}>
    <h4><Link href="/"><div className={`${styles.logo} ${activeClass}`}>BARBARA SCHULZE</div></Link></h4>
    <div onClick={() => setIsModal(!isModal)}>
      <RadioButton/>
    </div>
  </div>
  <ul className={`${styles.menu} ${activeClass}`}>
      <li className={styles.nav_link} >
        <h4><Link href="/punkt">punkt</Link></h4>
      </li>
      <li className={styles.nav_link} >
        <h4><Link href="/komma">komma</Link></h4>
      </li>
      <li className={styles.nav_link} >
        <h4><Link href="/strich">strich</Link></h4>
      </li>
  </ul>
       
   
   </>
  )
}

export default Navbar
 