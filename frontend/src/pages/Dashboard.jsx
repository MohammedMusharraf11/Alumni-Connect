import React, { useState, useEffect } from 'react';
import { handleSuccess } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Actions from '../components/Actions';    

function Dashboard() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('loggedInUser');
        if (user) {
            setLoggedInUser(user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('Logged out successfully');
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div class name="flex-10 flex flex-col">
            <div className="flex-1 p-8 bg-gray-100">
                <h1 className="text-3xl font-semibold mb-4">
                    Welcome {loggedInUser}
                
                </h1>
            <Actions />
            </div>

                
            </div>
        </div>
    );
}

export default Dashboard;
