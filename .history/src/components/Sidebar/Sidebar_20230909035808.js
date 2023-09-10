import React from 'react';
import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active"></NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;