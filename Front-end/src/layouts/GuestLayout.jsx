import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Usercontext } from '../context/AuthProvider';



const GuestLayout = () => {
    const navigate=useNavigate()
    const {authenticated} =Usercontext()
    useEffect(()=>{
        if(authenticated){
            navigate('/dashboard')
        }
    },[authenticated, navigate])
    return (
        <div>
            
            <Outlet/>
            
        </div>
    );
}

export default GuestLayout;
