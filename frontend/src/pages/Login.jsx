import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/utils'; // Import your utility functions
import { ToastContainer } from 'react-toastify';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        collegeEmail: '',
        password: '',
    });
    const [userType, setUserType] = useState('student'); // New state for user type
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value); // Update user type based on selection
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { collegeEmail, password } = loginInfo;
        if (!collegeEmail || !password) {
            handleError('Please fill all the fields');
            return;
        }

        // Determine the API endpoint based on user type
        const url = userType === 'alumni'
            ? 'http://localhost:8080/api/alumni/login' // Alumni login endpoint
            : 'http://localhost:8080/auth/login'; // User login endpoint

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });
            const result = await response.json();
            const { success, message, token, fullname, profilePhoto, _id } = result;

            if (success) {
                handleSuccess(message);

                // Store the token and user information
                localStorage.setItem('token', token);
                localStorage.setItem('profilePhoto', profilePhoto);
                localStorage.setItem('loggedInUser', fullname);
                localStorage.setItem('userId', _id); // Store userId properly

                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000);
            } else {
                handleError(message || 'Login failed');
            }
        } catch (error) {
            handleError(error.message);
        }
    };

    const handleAdminRedirect = () => {
        navigate('/admin'); // Navigate to the Admin Panel
    };

    return (
        <>
            <div className="container mx-auto py-16 text-outfit">
                <div className="max-w-md mx-auto p-8 border border-[#D4D4D4] rounded-lg shadow-lg bg-white">
                    <h3 className="text-3xl font-bold text-center text-secondary mb-4">Login</h3>
                    <p className="text-zinc-500 text-center mb-5">Please login to connect with Alumni or Students</p>

                    {/* User Type Selection */}
                    <div className="flex justify-center mb-4">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="student"
                                checked={userType === 'student'}
                                onChange={handleUserTypeChange}
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="alumni"
                                checked={userType === 'alumni'}
                                onChange={handleUserTypeChange}
                            />
                            Alumni
                        </label>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="collegeEmail" className="text-gray-600 mb-2">Email</label>
                            <input
                                type="text"
                                id="collegeEmail"
                                name="collegeEmail"
                                value={loginInfo.collegeEmail}
                                onChange={handleChange}
                                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginInfo.password}
                                onChange={handleChange}
                                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600">
                                Login
                            </button>
                        </div>
                    </form>
                    <br />
                    <p className="text-gray-700 text-center">
                        Don't have an account?{' '}
                        <Link to="/roleselection" className="text-blue-500 hover:underline">
                            Register Here
                        </Link>
                    </p>
                    <br />
                    <p className="text-gray-700 text-center">
                        Admin?{' '}
                        <span
                            onClick={handleAdminRedirect}
                            className="text-blue-500 cursor-pointer hover:underline"
                        >
                            Go to Admin Panel
                        </span>
                    </p>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default Login;
