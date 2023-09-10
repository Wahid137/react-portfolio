import React from 'react';
import './Main.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>

            <div className='page'>
                <span className='tags top-tags'> &lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    );
};

export default Main;