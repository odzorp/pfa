import React from 'react';
import styles from '../css modules/HomeRightSide.module.css';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const HomeRightSide = () => {
    const container ={
        width: '158px',
        height: '195px',
    }
    return (
        

        <div style={container} className={styles.container}>
            <div>
            <p className={styles.headTxt}>Empower your financial future with Alpha:</p>
            <p className={styles.btmTxt}>Seamlessly track, manage, and achieve  your financial goals with our intuitive and secure apps.</p>
            </div>
            <Link  to='/Sign-in'><Button className={styles.btn} btnName='Join us'/></Link>
    
        </div>
    );
}

export default HomeRightSide;
