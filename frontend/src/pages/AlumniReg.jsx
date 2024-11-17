import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { handleError, handleSuccess } from '../utils/utils';
import { ToastContainer } from 'react-toastify';

function AlumniReg() {
  const [fullName, setFullName] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [degreeCertificate, setDegreeCertificate] = useState(null);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      !fullName ||
      !graduationYear ||
      !collegeEmail ||
      !password ||
      !confirmPassword ||
      !profilePhoto
    ) {
      handleError('Please fill all the fields');
      return;
    }
    if (password !== confirmPassword) {
      handleError('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('graduationYear', graduationYear);
    formData.append('collegeEmail', collegeEmail);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('linkedin', linkedin);
    formData.append('image', profilePhoto); // Ensure the backend expects this field name
    if (degreeCertificate) {
      formData.append('degreeCertificate', degreeCertificate);
    }

    try {
      const response = await axios.post('http://localhost:8080/api/alumni/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        handleSuccess(response.data.message);
        setTimeout(() => navigate('/login'), 1000);
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      handleError(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="container mx-auto py-16 font-outfit">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Alumni Registration</h2>
      <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Graduation Year */}
        <div className="flex flex-col">
          <label htmlFor="graduationYear" className="text-gray-600 mb-2">Graduation Year</label>
          <input
            type="number"
            id="graduationYear"
            name="graduationYear"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            placeholder="Enter your graduation year"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* College Email */}
        <div className="flex flex-col">
          <label htmlFor="collegeEmail" className="text-gray-600 mb-2">College Email</label>
          <input
            type="email"
            id="collegeEmail"
            name="collegeEmail"
            value={collegeEmail}
            onChange={(e) => setCollegeEmail(e.target.value)}
            placeholder="Enter your college email"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-gray-600 mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* LinkedIn URL */}
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-gray-600 mb-2">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="Enter your LinkedIn URL"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col">
          <label htmlFor="profilePhoto" className="text-gray-600 mb-2">Profile Photo</label>
          <input
            type="file"
            id="profilePhoto"
            name="image"
            onChange={(e) => setProfilePhoto(e.target.files[0])}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Degree Certificate */}
        <div className="flex flex-col">
          <label htmlFor="degreeCertificate" className="text-gray-600 mb-2">Degree Certificate</label>
          <input
            type="url"
            id="degreeCertificate"
            name="degreeCertificate"
            onChange={(e) => setDegreeCertificate(e.target.value)}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="bg-primary text-white px-10 py-3 rounded-full font-light hover:bg-orange-600 transition">
            Create Account
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AlumniReg;
