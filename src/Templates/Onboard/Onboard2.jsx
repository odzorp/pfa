import React from 'react';
import styles from '../../css modules/Onboard2.module.css';
import Footer from '../../molecules/Footer';
import Icon1 from '../../asset/book 1.svg';
import HomeNav from '../../molecules/HomeNav';
import {Link} from 'react-router-dom'

const Onboard2 = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <HomeNav/>
            <div className={styles.container}>
            <div className={styles.wrapperLeft}>
                <div className={styles.Box1}></div>
                <div className={styles.Box2}></div>

            </div>
            <div className={styles.wrapperRight}>
                <p className={styles.HeadTxt}>Are you ready to achieve your financial goals with Alpha?Let’s dive into the details.</p>
                <div className={styles.Onboard1contain}>
                    <div className={styles.rule}></div>
                    <div className={styles.holder}>

                        <img src={Icon1} alt="" />

                        <div className={styles.HolderTxt}>
                            <p className={styles.firstTxt}>Discover the key element  that shape a thriving financial profile</p>
                            <p className={styles.secondTxt}>Explore what it takes to  make the most out of your financial journey with Alpha.</p>
                        </div>

                    </div>
                  
                    <div className={styles.rule}></div>
                    <div className={styles.holder}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                <path d="M18.5 2C9.38705 2 2 9.38705 2 18.5C2 27.6129 9.38705 35 18.5 35C27.6129 35 35 27.6129 35 18.5C35 9.38705 27.6129 2 18.5 2Z" stroke="#959595" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.75293 28.9718C5.75293 28.9718 9.43078 24.2759 18.5058 24.2759C27.5808 24.2759 31.2603 28.9718 31.2603 28.9718" stroke="#959595" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.4988 18.5006C19.8116 18.5006 21.0707 17.9791 21.999 17.0508C22.9273 16.1225 23.4488 14.8634 23.4488 13.5506C23.4488 12.2378 22.9273 10.9787 21.999 10.0504C21.0707 9.1221 19.8116 8.60059 18.4988 8.60059C17.186 8.60059 15.927 9.1221 14.9986 10.0504C14.0703 10.9787 13.5488 12.2378 13.5488 13.5506C13.5488 14.8634 14.0703 16.1225 14.9986 17.0508C15.927 17.9791 17.186 18.5006 18.4988 18.5006V18.5006Z" stroke="#959595" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                        <div className={styles.HolderTxt}>
                            <p className={styles.firstTxt}>Create your profile</p>
                            <p className={styles.secondTxt}>Add your profile picture, descriptions and set spending limits</p>
                        </div>

                    </div>
                  
                    <div className={styles.rule}></div>

                    <div className={styles.holder}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.732 5.04039C18.7253 4.51499 17.3612 4.50688 16.3465 5.03093C12.4571 7.03965 8.92925 9.34279 5.83778 11.8973C5.35972 12.2923 5.02045 12.8664 5.02624 13.542C5.03201 14.2149 5.37818 14.7813 5.85334 15.1698C8.91912 17.6766 12.4498 19.9818 16.2681 21.9746C17.2747 22.5 18.6388 22.5081 19.6535 21.9841C23.543 19.9753 27.0708 17.6722 30.1623 15.1177C30.6403 14.7227 30.9796 14.1486 30.9738 13.473C30.968 12.8001 30.6219 12.2337 30.1467 11.8452C27.0809 9.33843 23.5502 7.0332 19.732 5.04039ZM17.379 7.03007C17.7385 6.8444 18.329 6.84616 18.6909 7.03506C22.3349 8.93694 25.6925 11.125 28.6014 13.4883C25.6752 15.8897 22.3275 18.0707 18.6211 19.9849C18.2616 20.1706 17.6711 20.1688 17.3091 19.9799C13.6651 18.0781 10.3075 15.89 7.39867 13.5266C10.3249 11.1253 13.6725 8.94428 17.379 7.03007Z" fill="#959595"/>
                                <path d="M31.7956 19.047C32.1246 19.5741 31.9641 20.2681 31.4371 20.5971L22.2762 26.3164C21.0331 27.0925 19.4908 27.4514 17.9999 27.4515C16.509 27.4516 14.9666 27.0929 13.7233 26.317L4.66282 20.6624C4.13573 20.3334 3.97511 19.6394 4.30407 19.1123C4.63302 18.5852 5.32699 18.4246 5.85408 18.7536L14.9146 24.4082C15.7308 24.9176 16.8396 25.2015 17.9998 25.2015C19.1599 25.2014 20.2686 24.9173 21.0847 24.4079L30.2455 18.6885C30.7725 18.3595 31.4665 18.52 31.7956 19.047Z" fill="#959595"/>
                                <path d="M31.7955 24.679C32.1246 25.206 31.9642 25.9 31.4372 26.2291L23.5038 31.1834C21.9174 32.1741 19.9329 32.6403 17.9998 32.6404C16.0668 32.6405 14.0822 32.1746 12.4955 31.1841L4.66271 26.2944C4.13566 25.9653 3.97512 25.2714 4.30414 24.7443C4.63316 24.2173 5.32714 24.0567 5.8542 24.3857L13.687 29.2755C14.8465 29.9993 16.3974 30.3905 17.9997 30.3904C19.602 30.3903 21.1527 29.9989 22.312 29.275L30.2454 24.3207C30.7724 23.9916 31.4664 24.152 31.7955 24.679Z" fill="#959595"/>
                    </svg>

                        <div className={styles.HolderTxt}>
                            <p className={styles.firstTxt}>Financial Mastery Begins</p>
                            <p className={styles.secondTxt}>Explore our powerful  services to take control of your finances</p>
                        </div>

                    </div>
                  
                    <div className={styles.rule}></div>

                </div>
                <Link to='/welcome-2'>
                <button className={styles.Onboardbtn}>Continue</button>
                </Link>

            </div>

        
            
            </div>
        
            <Footer />

        </div>


    );
}

export default Onboard2;
