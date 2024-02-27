import React, { useState } from 'react';
import axios from 'axios';
import styles from '../css modules/LeftLogin.module.css';
import logo from '../asset/Group 28.svg';
import { Link , Navigate} from 'react-router-dom';


const LeftLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [token, setToken] = useState('')
  
    const login = async (ev) => {
      ev.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:4000/api/user/login', {
          email,
          password,
        });
    
        if (response.status === 200) {
          const  token  = response.data.accessToken;
          setToken(token);
          localStorage.setItem('token', token);
          setRedirect(true);
        } else {
          alert('Wrong credentials');
        }
      } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed: An unexpected error occurred.');
      }
    };
  
    if (redirect) {
      return <Navigate to="/welcome-1" />;
    }
  
    
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <img src={logo} alt="logo" />

                <div className={styles.TxtHolder}>
                <p className={styles.header}>Hi, Welcome Back!</p>
                <p className={styles.subTxt}>Login to you account to enjoy</p>
                </div>
                <form onSubmit={login} className={styles.form}>
                    <div>
                    <p className={styles.label}>Email address</p>
                    <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.75 3.75H2.25C1.83516 3.75 1.5 4.08516 1.5 4.5V19.5C1.5 19.9148 1.83516 20.25 2.25 20.25H21.75C22.1648 20.25 22.5 19.9148 22.5 19.5V4.5C22.5 4.08516 22.1648 3.75 21.75 3.75ZM20.8125 6.34687V18.5625H3.1875V6.34687L2.54063 5.84297L3.46172 4.65938L4.46484 5.43984H19.5375L20.5406 4.65938L21.4617 5.84297L20.8125 6.34687V6.34687ZM19.5375 5.4375L12 11.2969L4.4625 5.4375L3.45938 4.65703L2.53828 5.84062L3.18516 6.34453L11.1914 12.5695C11.4217 12.7484 11.7049 12.8455 11.9965 12.8455C12.2881 12.8455 12.5713 12.7484 12.8016 12.5695L20.8125 6.34687L21.4594 5.84297L20.5383 4.65938L19.5375 5.4375Z" fill="#8F95B2"/>
                        </svg></i>
                    <input 
                    className={styles.inputField} 
                    type="text" 
                    name="name"
                    id="name"           
                    placeholder='Alpha@gmail.com'
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}/>
                    </div>
                    
                    <div className={styles.last}>
                    <p className={styles.label}>Password</p>
                    <i className={styles.icon}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.5 10.875H17.9062V5.625C17.9062 3.96797 16.5633 2.625 14.9062 2.625H9.09375C7.43672 2.625 6.09375 3.96797 6.09375 5.625V10.875H4.5C4.08516 10.875 3.75 11.2102 3.75 11.625V20.625C3.75 21.0398 4.08516 21.375 4.5 21.375H19.5C19.9148 21.375 20.25 21.0398 20.25 20.625V11.625C20.25 11.2102 19.9148 10.875 19.5 10.875ZM7.78125 5.625C7.78125 4.90078 8.36953 4.3125 9.09375 4.3125H14.9062C15.6305 4.3125 16.2188 4.90078 16.2188 5.625V10.875H7.78125V5.625ZM18.5625 19.6875H5.4375V12.5625H18.5625V19.6875ZM11.3438 16.4297V17.6719C11.3438 17.775 11.4281 17.8594 11.5312 17.8594H12.4688C12.5719 17.8594 12.6562 17.775 12.6562 17.6719V16.4297C12.8497 16.2908 12.9941 16.0941 13.0687 15.8679C13.1432 15.6417 13.1441 15.3977 13.0711 15.1709C12.9982 14.9442 12.8552 14.7465 12.6627 14.6062C12.4702 14.466 12.2382 14.3904 12 14.3904C11.7618 14.3904 11.5298 14.466 11.3373 14.6062C11.1448 14.7465 11.0018 14.9442 10.9289 15.1709C10.8559 15.3977 10.8568 15.6417 10.9313 15.8679C11.0059 16.0941 11.1503 16.2908 11.3438 16.4297V16.4297Z" fill="#8F95B2"/>
                        </svg></i>
                    <input 
                    className={styles.inputField}  
                    type="password" 
                    placeholder='******'
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    />
                    </div>
                    <Link className={styles.fgt} to=''>forgot password?</Link>
                    <button className={styles.btn} type="submit">
                       Login
                    </button>
                 <p> Not registered yet?  <Link className={styles.fgt} to='/register'> Create an Account</Link></p>

                </form>
                




            </div>
            
        </div>
    );
}

export default LeftLogin;
