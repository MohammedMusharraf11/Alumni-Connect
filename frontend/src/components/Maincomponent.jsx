import React, { useState } from 'react';
import ScheduleEvent from './ScheduleEvent'; // Import ScheduleEvent form
import JobOpeningsForm from './JobOpenings'; // Import JobOpenings form
import HostMentorshipForm from './HostMentorship'; // Import HostMentorshipForm 
import Messages from './Messages'; // Import Messages component

const MainComponent = () => {
  const [activeForm, setActiveForm] = useState('');

  // Sample conversations for demonstration
  const conversations = [
    { sender: 'John Doe', message: 'Hey! How are you?' },
    { sender: 'Jane Smith', message: 'Looking forward to our meeting.' },
    { sender: 'Alice Johnson', message: 'Did you receive my email?' },
  ];

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="p-6">
      {/* Buttons for form selection */}
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={() => handleFormSelection('scheduleEvent')} 
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Schedule Event
        </button>
        <button 
          onClick={() => handleFormSelection('jobOpening')} 
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Job Opening
        </button>
        <button 
          onClick={() => handleFormSelection('hostMentorship')} 
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Host a Mentorship
        </button>
        <button 
          onClick={() => handleFormSelection('messages')} 
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Messages
        </button>
      </div>

      {/* Conditionally render the form or messages based on the selected button */}
      <div className="mt-6">
        {activeForm === 'scheduleEvent' && <ScheduleEvent onCancel={() => setActiveForm('')} />}
        {activeForm === 'jobOpening' && <JobOpeningsForm onCancel={() => setActiveForm('')} />}
        {activeForm === 'hostMentorship' && <HostMentorshipForm onCancel={() => setActiveForm('')} />}
        {activeForm === 'messages' && <Messages conversations={conversations} />}
      </div>
    </div>
  );
};

export default MainComponent;
