import React from 'react';
import HeroImg from '../asset/HeroImg.png';


const HomeLeftSide = () => {
    const img = {
        width: '501px',
        height: '367px',
        flexshrink: '0'

    }

    return (
        <div>
            <img style={img} src={HeroImg} alt="" />
        </div>
    );
}

export default HomeLeftSide;
