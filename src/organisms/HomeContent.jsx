import React from 'react';
import HomeRightSide from '../molecules/HomeRightSide';
import RadialGradient from '../atoms/RadialGradient';
import HomeLeftSide from '../molecules/HomeLeftSide';

const HomeContent = () => {
    const wrapper ={
        display: 'flex',
        alignItems:' center',
        justifyContent: 'space-between',
        marginTop: '60px',
        width: '1050px'
    }
    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }



    return (
        <div style={container}>
           <div style={wrapper}>
           <HomeRightSide/>
           <HomeLeftSide/>
           </div>
            <RadialGradient/>
            
        </div>
    );
}

export default HomeContent;
