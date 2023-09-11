import React from 'react';
import LogoS from '../../../assets/images/logo-s.png';
import './Logo.scss'

const Logo = () => {
    return (
        <div className='log-container'>
            <img src={LogoS} alt="" />
        </div>
    );
};

export default Logo;