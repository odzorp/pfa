import React from 'react'
import HomeNav from '../../molecules/HomeNav';
import HomeContent from '../../organisms/HomeContent';
import Footer from '../../molecules/Footer';

const Homepage = ()  => {
  return (
    <div style={{overflow:'hidden'}}>
        <HomeNav/>
        <HomeContent/>
        <Footer/>
        
    </div>

  )
}
 
export default Homepage;