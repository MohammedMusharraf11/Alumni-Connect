import React from 'react';

const Actions = () => {
  return (
    <div className="flex justify-center items-center space-x-4 font-outfit">
      <div className="flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.882 4.118a4.5 4.5 0 00-1.059-2.118l-1.5-1.5a4.5 4.5 0 00-5.039 0l-1.5 1.5a4.5 4.5 0 00-1.06 2.118l1.5 1.5a4.5 4.5 0 005.039 0l1.5-1.5zM12 10.5a3 3 0 10-3 3 3 3 0 003-3zM12 18.5a3 3 0 10-3 3 3 3 0 003-3z" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Add Post</h3>
        <p className="text-xs text-gray-500">Share your thoughts, experiences, or updates with the community.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 16.5l-3-3m0 0l3-3m-3 3h12a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25H8.25a2.25 2.25 0 01-2.25-2.25V16.5z" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Schedule an Event</h3>
        <p className="text-xs text-gray-500">Organize and promote alumni events for networking and collaboration.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L12 13.5l-5.25-5.25m0 0l5.25 5.25-5.25 5.25" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Host a Mentorship</h3>
        <p className="text-xs text-gray-500">Offer your expertise to students and fellow alumni as a mentor.</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0-15l-4.5 4.5M12 4.5v15m0-15l4.5 4.5" />
        </svg>
        <h3 className="text-sm font-medium text-gray-700">Job Opening</h3>
        <p className="text-xs text-gray-500">Offer your expertise to students and fellow alumni as a mentor.</p>
      </div>
    </div>
  );
};

export default Actions;