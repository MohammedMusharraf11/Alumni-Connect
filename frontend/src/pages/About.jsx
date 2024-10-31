import React from "react";

function About() {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 font-sans text-gray-800 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-4">About Us</h1>
      
      {/* Welcome Section */}
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        <span className="font-semibold text-blue-800">Welcome!</span> This is more than just a platform; it’s a place to <span className="text-orange-500 font-semibold">connect, learn,</span> and <span className="text-orange-500 font-semibold">grow together.</span> Whether you’re an alumnus, a student, or just curious, there’s something here for everyone!
      </p>
      
      {/* Dotted Line */}
      <div className="flex justify-center mb-8">
        <div className="border-t-4 border-dotted border-orange-500 w-20"></div>
      </div>

      {/* Features Section */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-800 mb-4">Our Features:</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li className="mb-2">
          <span className="text-orange-500 font-semibold">Networking Opportunities:</span> Connect with alumni and students to build lasting relationships.
        </li>
        <li className="mb-2">
          <span className="text-orange-500 font-semibold">Mentorship:</span> Find mentors who can guide you through your career path.
        </li>
        <li className="mb-2">
          <span className="text-orange-500 font-semibold">Webinars & Events:</span> Learn from industry experts in our interactive sessions.
        </li>
        <li className="mb-2">
          <span className="text-orange-500 font-semibold">Career Guidance:</span> Get advice and resources to navigate your career path.
        </li>
      </ul>

      {/* Dotted Line */}
      <div className="flex justify-center my-8">
        <div className="border-t-4 border-dotted border-orange-500 w-20"></div>
      </div>

      {/* Closing Statement */}
      <p className="text-lg md:text-xl text-gray-700">
        Together, let’s make this journey <span className="text-orange-500 font-semibold">unforgettable</span>. Join us in creating lasting memories, and become part of a network that celebrates every achievement.
      </p>
    </div>
  );
}

export default About;
