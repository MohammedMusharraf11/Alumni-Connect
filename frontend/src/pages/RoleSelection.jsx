import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { useNavigate } from 'react-router-dom';


function RoleSelection() {
  const navigate = useNavigate()
  return (
    <>
    <div className="container mx-auto py-16 font-outfit">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Select Your Role</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Student Card */}
        <div className="card flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
          <img src={assets.Student} alt="Student" className="w-42 h-42 mb-4 object-contain" />
          <p className="text-primary mb-2 font-semibold text-xl">Register as Student</p>
          <button onClick={() => navigate('/student-register')} className="bg-secondary text-white px-8 py-3 rounded-full font-light mb-4">Student</button>
          <p className="text-gray-700">Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
        
        {/* Alumni Card */}
        <div className="card flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
          <img src={assets.Alumni} alt="Alumni" className="w-42 h-42 mb-4 object-contain" />
          <p className="text-primary mb-2 font-semibold text-xl">Register as Alumni</p>
          <button onClick={() => navigate('/alumni-register')} className="bg-secondary text-white px-8 py-3 rounded-full font-light mb-4">Alumni</button>
          <p className="text-gray-700">Have an Account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
        </div>

      </div>
    </div>
    </>
  );
}

export default RoleSelection;
