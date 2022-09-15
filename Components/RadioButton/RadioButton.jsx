import React, { useState } from 'react';
import styles from './radioButton.module.scss'


  const RadioButton = () => {
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
        <img className={styles.radio}  src={button ? icon.white : icon.black} alt="radioButton" onClick={handleChange} />
        </div>
    )
  };

  export default RadioButton;



 
