import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils/utils';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

function StudentReg() {

  const [fullName, setFullName] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [course, setCourse] = useState('');
  const [usn, setUsn] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  // API: 
  const navigate = useNavigate();
  
  const submitForm = async (e) => {
    e.preventDefault();

    if(!fullName || !graduationYear || !collegeEmail || !course || !usn || !fieldOfStudy || !linkedin || !github || !password || !confirmPassword || !profilePhoto) {
      handleError('Please fill all the fields');
      return;
    }
    if(password !== confirmPassword) {
      handleError('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('graduationYear', graduationYear);
    formData.append('collegeEmail', collegeEmail);
    formData.append('course', course);
    formData.append('usn', usn);
    formData.append('fieldOfStudy', fieldOfStudy);
    formData.append('linkedin', linkedin);
    formData.append('github', github);
    formData.append('password', password);
    formData.append('confirmPassword', confirmPassword);
    formData.append('image', profilePhoto);

    try {
      const response = await axios.post('http://localhost:8080/auth/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
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


  const years = Array.from({ length: 5 }, (_, i) => 2024 + i);

  return (
    <>
      <div className="container mx-auto py-16 font-outfit">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Student Registration</h2>
        <form onSubmit={submitForm} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-600 mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-gray-600 mb-2">Graduation Year</label>
            <select
              id="graduationYear"
              name="graduationYear"
              value={graduationYear}
              onChange={(e)=> setGraduationYear(e.target.value)}
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
            <label htmlFor="collegeEmail" className="text-gray-600 mb-2">College Email Address</label>
            <input
              type="email"
              id="collegeEmail"
              name="collegeEmail"
              value={collegeEmail}
              onChange={(e)=> setCollegeEmail(e.target.value)}
              placeholder="Enter your college email"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="course" className="text-gray-600 mb-2">Course</label>
            <input
              type="text"
              id="course"
              name="course"
              value={course}
              onChange={(e)=> setCourse(e.target.value)}
              placeholder="Enter your course"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="usn" className="text-gray-600 mb-2">USN</label>
            <input
              type="text"
              id="usn"
              name="usn"
              value={usn}
              onChange={(e)=> setUsn(e.target.value)}
              placeholder="Enter your USN"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fieldOfStudy" className="text-gray-600 mb-2">Field of Study</label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={fieldOfStudy}
              onChange={(e)=> setFieldOfStudy(e.target.value)}
              placeholder="Enter your field of study"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="linkedin" className="text-gray-600 mb-2">LinkedIn</label>
            <input
              type="url"
              id="linkedin"
              name="linkedin"
              value={linkedin}
              onChange={(e)=> setLinkedin(e.target.value)}
              placeholder="Enter your LinkedIn profile URL"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="github" className="text-gray-600 mb-2">GitHub</label>
            <input
              type="url"
              id="github"
              name="github"
              value={github}
              onChange={(e)=> setGithub(e.target.value)}
              placeholder="Enter your GitHub profile URL"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
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
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profilePhoto" className="text-gray-600 mb-2">Profile Photo</label>
            <input
              type="file"
              id="profilePhoto"
              name="image"
              onChange={(e)=> setProfilePhoto(e.target.files[0])}
              className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button type="submit" className="bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hover:bg-orange-600 transition">
              Create Account
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          {/* <button onClick={()=>navigate('/roleselection')} className='bg-primary font-outfit text-white px-10 py-3 rounded-full font-light hidden md:block hover:bg-orange-600 transition'>Create Account</button> */}
          <p className="text-gray-700">Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default StudentReg;
