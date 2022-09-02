import React, {useState} from 'react'
import Link from 'next/link'
import styles from './navbar.module.scss'
import RadioButton from '../RadioButton/RadioButton'
import Logo from '../Logo/Logo'

const Navbar = () => {
  const [isModal, setIsModal] = useState(false);
  //isModal ? console.log('hello!') : ''
  
  const activeClass = isModal
      ? `${styles["active"]}`
      : ''

  return (
   <>
  <div className={`${styles.navigation} ${activeClass}`}>
  {/*<Logo/>*/}
   <h4>
        <Link href="/">
            <div className={`${styles.logo} ${activeClass}`}>Barbara Schulze</div>
        </Link>
    </h4> 
    <div onClick={() => setIsModal(!isModal)}>
      <RadioButton/>
    </div>
  </div>
  <ul className={`${styles.menu} ${activeClass}`}>
      <li className={styles.nav_link} >
        <h4><Link href="/">punkt</Link></h4>
      </li>
      <li className={styles.nav_link} >
        <h4><Link href="/">komma</Link></h4>
      </li>
      <li className={styles.nav_link} >
        <h4><Link href="/">strich</Link></h4>
      </li>
  </ul>
       
   
   </>
  )
}

export default Navbar