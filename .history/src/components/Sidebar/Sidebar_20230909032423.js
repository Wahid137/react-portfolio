import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>

            </Link>
        </div>
    );
};

export default Sidebar;