import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'> &lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />

                </span>

            </div>


        </div>
    );
};

export default Main;