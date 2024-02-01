import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Main.scss';

const Main = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                {/* <span className="top-tag-html">&lt;html&gt;</span> */}
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