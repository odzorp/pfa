import React from 'react';
import styles from '../css modules/ProfileHero.module.css'
// import FileUpload from '../atoms/FileUpload';
const ProfileHero = () => {
    return (
        <div className={styles.container}>
            {/* <FileUpload/> */}
            <div className={styles.rule}></div>
            <div>
            <p className={styles.headerTxt}>Profile Info</p>
            <p className={styles.subTxt}>Tell us a bit about your finance. This information allow us get to know how you spend better.</p>
            </div>
            <div className={styles.rule}></div>
            

        </div>
    );
}

export default ProfileHero;
