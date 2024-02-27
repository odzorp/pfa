import React from 'react';
import styles from '../../css modules/Onboard2.module.css';
import Footer from '../../molecules/Footer';
import BoyReading from '../../asset/boyReading.png'
import Icon1 from '../../asset/book 1.svg';
import HomeNav from '../../molecules/HomeNav';
import {Link} from 'react-router-dom';
import cardImg from '../../asset/card.png';
import linkImg from '../../asset/link.png';
import shieldImg from '../../asset/shield.png';
import iconImg from '../../asset/Icon.png';



const Onboard1 = () => {
    return (
        <div style={{overflow: 'hidden'}} >
        <HomeNav/>
        <div className={styles.container}>

        <div className={styles.wrapperLeft}>
           <img className={styles.boyImg} src={BoyReading} alt="" />

        </div>

        {/* Items at the right hand side */}
        <div className={styles.wrapperRight}>
            <p className={styles.HeadTxt}>What defines a successful  financial Profile?</p>
            <p className={styles.subTxt}>Making a lasting financial impression! Craft a profile with  Alpha.</p>
            
            <div className={styles.contain}>

                {/* items with Logo */}
                <div className={styles.itemsHolder}>

                    <div className={styles.Onboard2holder}>
                        <img className={styles.cardImg} src={cardImg} alt="" />

                        <div className={styles.Onboard2HolderTxt}>
                            <p className={styles.Onboard2secondTxt}>Take your time in creating your profile so it’s exactly as you want it to be.</p>
                        </div>
    
                    </div>

                    <div className={styles.Onboard2holder}>
                        <img className={styles.cardImg} src={linkImg} alt="" />

                        <div className={styles.Onboard2HolderTxt}>
                            <p className={styles.Onboard2secondTxt}>Link your financial achievements and goals with Alpha to build a robust financial  presence.</p>
                        </div>
 
                    </div>

                </div>

                <div className={styles.itemsHolder}>
                    
                    <div className={styles.Onboard2holder}>
                        <img className={styles.cardImg} src={iconImg} alt="" />

                        <div className={styles.Onboard2HolderTxt}>
                            <p className={styles.Onboard2secondTxt}>Take your time in creating your profile so it’s exactly as you want it to be.</p>
                        </div>
    
                    </div>

                    <div className={styles.Onboard2holder}>
                        <img className={styles.cardImg} src={shieldImg} alt="" />

                        <div className={styles.Onboard2HolderTxt}>
                            <p className={styles.Onboard2secondTxt}>Link your financial achievements and goals with Alpha to build a robust financial  presence.</p>
                        </div>
 
                    </div>

                </div>
                
            </div>
            <Link to='/set-profile'>
            <button className={styles.Onboard1btn}>Continue</button>
            </Link>

        </div>

    
        
        </div>
    
        <Footer />

    </div>

    );
}

export default Onboard1;
