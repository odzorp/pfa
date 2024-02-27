import React from 'react';
import {useState} from 'react'
import styles from '../css modules/Box2.module.css'

const Box2 = () => {
  const [income, setIncome] = useState('');

  async function getIncome (ev){
    ev.prventDefault();

    const response = await fetch("http://localhoste:4000/")
  }
    return (
        <div>
        <div className={styles.Box}>
          <div  className={styles.headBox}>
          <div className={styles.content}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
<path d="M15.4259 9.375V13.75C15.4259 14.0815 15.296 14.3995 15.0649 14.6339C14.8338 14.8683 14.5204 15 14.1935 15H1.86999C1.54315 15 1.22969 14.8683 0.998582 14.6339C0.767471 14.3995 0.637634 14.0815 0.637634 13.75V9.375C0.637634 9.20924 0.702553 9.05027 0.818108 8.93306C0.933664 8.81585 1.09039 8.75 1.25381 8.75C1.41723 8.75 1.57396 8.81585 1.68951 8.93306C1.80507 9.05027 1.86999 9.20924 1.86999 9.375V13.75H14.1935V9.375C14.1935 9.20924 14.2584 9.05027 14.374 8.93306C14.4895 8.81585 14.6463 8.75 14.8097 8.75C14.9731 8.75 15.1298 8.81585 15.2454 8.93306C15.361 9.05027 15.4259 9.20924 15.4259 9.375ZM7.59581 9.81719C7.65303 9.8753 7.72099 9.9214 7.79579 9.95285C7.8706 9.9843 7.95078 10.0005 8.03175 10.0005C8.11273 10.0005 8.19291 9.9843 8.26771 9.95285C8.34251 9.9214 8.41047 9.8753 8.4677 9.81719L11.5486 6.69219C11.6058 6.63412 11.6512 6.56518 11.6822 6.48931C11.7132 6.41344 11.7292 6.33212 11.7292 6.25C11.7292 6.16788 11.7132 6.08656 11.6822 6.01069C11.6512 5.93482 11.6058 5.86588 11.5486 5.80781C11.4913 5.74974 11.4234 5.70368 11.3486 5.67225C11.2738 5.64083 11.1936 5.62465 11.1126 5.62465C11.0317 5.62465 10.9515 5.64083 10.8767 5.67225C10.8019 5.70368 10.7339 5.74974 10.6767 5.80781L8.64793 7.86641V0.625C8.64793 0.45924 8.58301 0.300269 8.46746 0.183058C8.3519 0.0658481 8.19517 0 8.03175 0C7.86833 0 7.71161 0.0658481 7.59605 0.183058C7.48049 0.300269 7.41558 0.45924 7.41558 0.625V7.86641L5.38681 5.80781C5.27119 5.69054 5.11438 5.62465 4.95087 5.62465C4.78736 5.62465 4.63054 5.69054 4.51492 5.80781C4.3993 5.92509 4.33435 6.08415 4.33435 6.25C4.33435 6.41585 4.3993 6.57491 4.51492 6.69219L7.59581 9.81719Z" fill="black"/>
</svg>
            <p className={styles.balance}>Income</p>
          </div>
            

          </div>
          <p className={styles.innerTxt}>₵5,000.00</p>
        </div>
        </div>
    );
}

export default Box2;
