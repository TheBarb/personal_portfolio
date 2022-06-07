import React, { useState } from 'react';
import Image from 'next/image';
import styles from './radioButton.module.scss'


  const RadioButton = (props) => {
    const [button, setButton] = useState(false);

    let icon = {
        black: "/radiobutton.svg",
        white: "/radiobutton_checked.svg"
    };

    
    const handleChange = () => {
        setButton(!button);
       /* if (!value) {
            console.log('true') 

        } else if (value){
          console.log('false')
        }*/
      };

      return (
        <div className={styles.sudo}>
        <img className={styles.radio}  src={button ? icon.white : icon.black} alt="Vercel Logo" onClick={handleChange} />
        </div>
    )
  };

  export default RadioButton;



 
