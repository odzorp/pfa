import React from 'react';
import RightImg from '../../atoms/RightImg';
import LeftLogin from '../../molecules/LeftLogin';

const Login = () => {
    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    }
    return (
        <div style={container}>
            <LeftLogin/>
            <RightImg/>
        </div>
    );
}

export default Login;
