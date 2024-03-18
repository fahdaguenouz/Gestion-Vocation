import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../assets/styles/layout.css';
import Sidebar from './Sidebar';
const Layout = () => {

    return (
        <div className='app-container'>
            <div className='sidebar mb-5'>
                <Sidebar />
            </div>
            <main >
                <div className='main-content'>
                    <Outlet />
                </div>
            </main>
            <footer>footer</footer>
        </div>
    );
}

export default Layout;
