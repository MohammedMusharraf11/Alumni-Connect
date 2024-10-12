import React from 'react'
import { useState,useEffect } from 'react'
import { handleSuccess } from '../utils/utils';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('Logged out successfully');
        setTimeout(() => {
            navigate('/');
        }, 1000); 
    }
    
  return (
    <div className='flex justify-center items-start font-outfit'>
        
      <h1>Welcome {loggedInUser}</h1>
      <br />
      
      <button onClick={handleLogout} className='bg-secondary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block'>Logout</button>
    </div>
  )
}

export default Dashboard;
