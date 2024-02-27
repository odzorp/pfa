import React from 'react'
import Nav from '../../molecules/Nav';
import Header from '../../molecules/Header';
import Body from '../../molecules/Body';

const Dashboard = () => {

  const container ={
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff'
  }

  
  return (
    <div>
        <div style={container}>
        <Nav/>
        {/* <Header/> */}
        <Body/>
        </div>


    </div>
    
  )
}

export default Dashboard;
