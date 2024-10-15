import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/utils';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AlumniReg() {
  const [signUp, setsignUp] = useState({
    fullName: '',
    graduationYear: '',
    collegeEmail: '',
    password: '',
    confirmPassword: '',
    linkedin: '',
    degreeCertificate: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setsignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setsignUp({
      ...signUp,
      degreeCertificate: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signUp);
    const { fullName, graduationYear, collegeEmail, password, confirmPassword, linkedin, degreeCertificate } = signUp;

    if (!fullName || !graduationYear || !collegeEmail || !password || !confirmPassword) {
      handleError('Please fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      handleError('Passwords do not match');
      return;
    }

    try {
      const url = 'http://localhost:8080/auth/signup';
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('graduationYear', graduationYear);
      formData.append('collegeEmail', collegeEmail);
      formData.append('password', password);
      formData.append('confirmPassword', confirmPassword);
      formData.append('linkedin', linkedin);
      formData.append('degreeCertificate', degreeCertificate);

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      console.log(result);
    } catch (error) {
      handleError(error.message);
    }
  };

  const years = Array.from({ length: 50 }, (_, i) => 2024 + i);

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-16 font-outfit">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Student Registration</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={signUp.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-gray-600 mb-2">Graduation Year</label>
            <select
              id="graduationYear"
              name="graduationYear"
              value={signUp.graduationYear}
              onChange={handleChange}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select your graduation year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="collegeEmail" className="text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              id="collegeEmail"
              name="collegeEmail"
              value={signUp.collegeEmail}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signUp.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-gray-600 mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={signUp.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-gray-600 mb-2">LinkedIn</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={signUp.linkedin}
              onChange={handleChange}
              placeholder="Enter your LinkedIn profile URL"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="degreeCertificate" className="text-gray-600 mb-2">Upload Degree Certificate</label>
            <input
              type="file"
              id="degreeCertificate"
              name="degreeCertificate"
              onChange={handleFileChange}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block hover:bg-orange-600 transition">
              Create Account
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-700">Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default AlumniReg;