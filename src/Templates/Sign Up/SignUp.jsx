import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../../atoms/Button';
import { Link } from 'react-router-dom';
import styles from '../../css modules/SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/api/user/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, confirmPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    try {
      const responseData = await response.json();
      
      if (!response.ok) {
        if (responseData && responseData.message) {
          alert(`Registration failed: ${responseData.message}`);
        } else {
          alert('Registration failed: An unknown error occurred.');
        }
      } else {
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Error parsing server response:', error);
      alert('Registration failed: An unexpected error occurred.');
    }
  }




  return (
    <div className={styles.signup}>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.Header}>Sign up to Alpha</p>
          <p className={styles.subTxt}>
            Already have an account?{' '}
            <Link to="/sign-in" className={styles.span}>
              Sign In
            </Link>
          </p>
        </div>

        <div className={styles.googleSignup}>
          <svg
            className={styles.GmailLogo}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M24 11.9994C24.0001 14.8249 23.0032 17.5599 21.1849 19.7226C19.3665 21.8853 16.8433 23.337 14.0597 23.8219C11.2761 24.3069 8.41064 23.7941 5.96801 22.3738C3.52539 20.9535 1.66229 18.7168 0.706855 16.0577C-0.248576 13.3986 -0.235048 10.4877 0.745054 7.83755C1.72516 5.18744 3.60897 2.96818 6.06468 1.57064C8.5204 0.173102 11.3905 -0.313067 14.1695 0.197764C16.9485 0.708595 19.4581 2.18366 21.2563 4.36315C21.3455 4.4636 21.4136 4.58101 21.4565 4.70837C21.4994 4.83573 21.5162 4.97042 21.5058 5.10441C21.4955 5.23839 21.4582 5.36892 21.3963 5.48819C21.3344 5.60746 21.2491 5.71303 21.1455 5.79858C21.0418 5.88414 20.922 5.94794 20.7932 5.98616C20.6643 6.02437 20.5291 6.03623 20.3956 6.02102C20.2621 6.00582 20.133 5.96385 20.0161 5.89764C19.8991 5.83143 19.7967 5.74232 19.715 5.63565C18.2442 3.8523 16.201 2.63357 13.933 2.18679C11.665 1.74001 9.31221 2.09278 7.27495 3.18509C5.23769 4.27739 3.64178 6.04176 2.7587 8.17804C1.87562 10.3143 1.75992 12.6906 2.43128 14.9025C3.10265 17.1145 4.51961 19.0256 6.44111 20.3106C8.36261 21.5957 10.67 22.1754 12.9707 21.951C15.2714 21.7267 17.4233 20.7122 19.0604 19.0802C20.6975 17.4482 21.7186 15.2994 21.95 12.9994H12C11.7348 12.9994 11.4804 12.894 11.2929 12.7065C11.1054 12.519 11 12.2646 11 11.9994C11 11.7342 11.1054 11.4798 11.2929 11.2923C11.4804 11.1048 11.7348 10.9994 12 10.9994H23C23.2652 10.9994 23.5196 11.1048 23.7071 11.2923C23.8946 11.4798 24 11.7342 24 11.9994Z" fill="#DF3E30"/>

          </svg>

          <Link className={styles.gmailTxt}>Sign up with Gmail</Link>
        </div>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <p className={styles.or}>OR</p>
          <div className={styles.line}></div>
        </div>

        <form onSubmit={register}>
          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <input
            className={styles.input}
            type="text"
            name=""
            id=""
            placeholder="Email Address"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />

          <button className={styles.btn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
