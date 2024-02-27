import React from 'react';
import HomeNav from '../../molecules/HomeNav';
import ProfileHero from '../../organisms/ProfileHero';
import ProfileForm from '../../molecules/ProfileForm';
import Footer from '../../molecules/Footer';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SetProfile = () => {

  
    

    const styles = {
        container:{
            overflow: 'hidden',
        },
    }
    return (
        <div style={styles.container}>
            <HomeNav/>
            <ProfileHero/>
            <ProfileForm />
            <Footer/>
        </div>
    );
}

export default SetProfile;
