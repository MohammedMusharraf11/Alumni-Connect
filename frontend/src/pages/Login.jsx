// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/utils'; // Import your utility functions
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Login() {
    
    const [loginInfo, setLoginInfo] = useState({
      collegeEmail: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { collegeEmail, password } = loginInfo;
        if(!collegeEmail || !password){
            handleError('Please fill all the fields');
            return;
        }
        try {
            const url = 'https://alumni-connect-backend.netlify.app/auth/login';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });
            const result = await response.json();
            const { success, message, token, error, fullname } = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedInUser',fullname); // Store token in local storage if needed
                setTimeout(() => {
                    navigate('/dashboard'); // Redirect to your dashboard or another page
                }, 1000);
            } else if(error){
              const details = error?.details[0].message;
              handleError(details);
            }else if(!success){
                handleError(message);
            }
        } catch (error) {
            handleError(error.message);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container mx-auto py-16 text-outfit">
            
            <div className="max-w-md mx-auto p-8 border border-[#D4D4D4] rounded-lg shadow-lg bg-white">
                <h3 className="text-3xl font-bold text-center text-secondary mb-4">Login</h3>
                <p className="text-zinc-500 text-center mb-5">Please login to connect with Alumni or Students</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="collegeEmail" className="text-gray-600 mb-2">Email</label>
                        <input
                            type="collegeEmail"
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
            </div>
            <ToastContainer />
        </div>
        <Footer/>
        </>
    );
}

export default Login;
