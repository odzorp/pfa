import React from 'react';
import CardImg from '../asset/Card.svg';
import styles from '../css modules/RightImg.module.css'

const RightImg = () => {


    return (
        <div className={styles.container}>
            <img src={CardImg} alt="card" className={styles.card} />
        </div>
    );
}

export default RightImg;
