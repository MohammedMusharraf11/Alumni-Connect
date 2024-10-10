import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-16 text-outfit">
      <div className="max-w-md mx-auto p-8 border border-[#D4D4D4] rounded-lg shadow-lg bg-white">
        <h3 className="text-3xl font-bold text-center text-secondary mb-4">Login</h3>
        <p className="text-zinc-500 text-center mb-5">Please login to connect with Alumni or Students</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
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
    </div>
  );
}

export default Login;
