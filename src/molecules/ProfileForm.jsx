import React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

// const FullName = 'Keneth Dapaa'

const ProfileForm = () => {
    const navigate = useNavigate();

    const [income,setIncome] = useState('');
    const [limit,setLimit] = useState('');
    const [savings,setSavings] = useState('');
    const [redirect,setRedirect] = useState('');
     const [username,setUsername] = useState('');
     const [token,setToken]= useState('');

    //  async function setProfile(ev) {
    //     ev.preventDefault();
    //     setToken(token);
      
    //     try {
    //         const response = await fetch('http://localhost:4000/api/userProfile/set', {
    //             method: 'POST',
    //             body: JSON.stringify({ username, income, limit, savings }),
    //             headers: {
    //               'Content-Type': 'application/json',
    //               'Authorization': `Bearer ${token}`, 
    //             },
    //             credentials: 'include',
    //           });
    //       const responseData = await response.json();
      
    //       if (response.status !== 200) {
    //         console.error('Profile settings failed:', responseData);
    //         alert(`Profile settings failed: ${responseData.message || 'An unknown error occurred.'}`);

    //       } else {
    //         alert('Registration successful!');
    //         navigate('/Dashboard');
    //       }
    //     } catch (error) {
    //       console.error('Error during fetch:', error);
    //       alert('Registration failed: An unexpected error occurred.');
    //     // navigate('/Dashboard');
    //     // console.log(response)
    //     }
    //   }
      
const styles ={
container:{
    marginLeft: '65px',
    overflow: 'hidden',
    width: '100vw',
    marginBottom: '233px',
    marginTop: '65px'
    
},
form: {
    width: '90%',
    height: '204px',
    flexShrink: '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
 
},
LeftInfo:{
    width: '501px',
    height: '168px'

},
LeftInfoWrapper:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '21px',
},
label:{
    color: '#171F25',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',

},
btn:{
    marginTop: '-87px',
    marginLeft: '934px',
    width: '181px',
    height: '41px',
    flexShrink: '0',
    background: '#432CDC',
    color: '#fff',
    cursor: 'pointer',
    border: 'none'

},
input:{
    borderRadius: '5px',
    border: '1px solid rgba(23, 31, 37, 0.50)',
    width: '266px',
    height: '36px',
    flexShrink: '0',
    backgroundColor: '#E8EDFD',
    paddingLeft: '21px'

},
}

    return (
        <div style={styles.container}>
            <form  action="" /*onSubmit={setProfile}*/>
                <div style={styles.form}>
                <div style={styles.LeftInfo}>
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label} htmlFor="">Username</label>
                    <input style={styles.input} type="text" placeholder='username' value={username} onChange={(ev) => setUsername(ev.target.value)} />
                    </div>
{/* 
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">Username</label>
                    <input style={styles.input} type="number" />
                    </div>                   */}
                    
                     <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">Income</label>
                    <input style={styles.input} type="number" value={income} onChange={(ev) => setIncome(ev.target.value)} />
                    </div>


                </div>
                <div style={styles.LeftInfo}>
                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label} htmlFor="">Spending Limit</label>
                    <input style={styles.input} type="number" value={limit} onChange={(ev) => setLimit(ev.target.value)} />
                    </div>

                    <div style={styles.LeftInfoWrapper}>
                    <label style={styles.label}  htmlFor="">How much will you like to save</label>
                    <input style={styles.input} type="number" value={savings} onChange={(ev) => setSavings(ev.target.value)}/>
                    </div>                  

                </div>
                </div>
                <button style={styles.btn}>Continue</button>

            </form>
        </div>
    );
}

export default ProfileForm;
