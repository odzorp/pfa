import React from 'react';
import styles from '../css modules/HomeNav.module.css';
import logo from '../asset/Group 28.svg';
import { NavLink,Link } from 'react-router-dom';

const HomeNav = () => {
    return (
        <div className= {styles.navContainer}>
           <Link to='/'> <img className={styles.img} src={logo} alt="Logo" /></Link>
            <nav className={styles.nav}>

                <NavLink to='/' className={styles.navItem} style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"}) }>Home</NavLink>
                <NavLink to='/about' className={styles.navItem}  style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"})}>About Us</NavLink>
                <NavLink to='/services' className={styles.navItem}  style={({isActive})=>({color: isActive? "#432CDC" : "#8C9093"})}>Services</NavLink>


            </nav>
            
        </div>
    );
}

export default HomeNav;
