import React from 'react';
import styles from '../../css modules/Error.module.css'
import arrow from '../../asset/arroww.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.Txt}>
                <p className={styles.topTxt}>404</p>
                <p className={styles.downTxt}>Page either does not exit or is under heavy construction. Go<button className={styles.bckbtn} onClick={()=>{navigate(-1)}}>back</button>  </p>
            </div>

           <img className={styles.arrow} src={arrow} alt="arrow" />
        </div>
    );
}

export default Error;
