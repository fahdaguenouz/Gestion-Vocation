import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Usercontext } from '../context/AuthProvider';
import UserApi from '../service/api/UserApi';

const Dashboard = () => {
    const navigate=useNavigate()
    
    const {setUser,setAuthenticated,logout,user}=Usercontext()
    useEffect(()=>{
        UserApi.getUser().then(({data})=>{
            console.log(data);
            setUser(data)
            setAuthenticated(true)
        }).catch(()=>{
            logout()
            navigate('/login')
        })
        
    },[])
    

    return (
        <div>
                        <strong><h3 style={{ color:"#004f83",fontWeight:"bold" }}>Dashboard</h3> </strong>
                        <div>
                            Bonjour Monsieur <span style={{ color:'red' }}> {user.name}</span>
                        </div>

        </div>
    );
}

export default Dashboard;
