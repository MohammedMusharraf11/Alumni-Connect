import React, { useState } from 'react';
import ScheduleEvent from './ScheduleEvent'; // Import ScheduleEvent form
import JobOpeningsForm from './JobOpenings'; // Import JobOpenings form
import HostMentorshipForm from './HostMentorship'; // Import HostMentorshipForm

const MainComponent = () => {
  // State to track which form is active
  const [activeForm, setActiveForm] = useState('');

  // Handler function to set the active form
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
      </div>

      {/* Conditionally render the form based on the selected button */}
      <div className="mt-6">
        {activeForm === 'scheduleEvent' && <ScheduleEvent onCancel={() => setActiveForm('')} />}
        {activeForm === 'jobOpening' && <JobOpeningsForm onCancel={() => setActiveForm('')} />}
        {activeForm === 'hostMentorship' && <HostMentorshipForm onCancel={() => setActiveForm('')} />}
      </div>
    </div>
  );
};

export default MainComponent;
