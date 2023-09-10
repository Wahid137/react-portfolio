import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>

            </Link>
        </div>
    );
};

export default Sidebar;